import { Injectable, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FingerprintReader, SampleFormat, DeviceConnected, DeviceDisconnected, SamplesAcquired, ErrorOccurred, DeviceTechnology } from '@digitalpersona/devices';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigitalPersonaService implements OnDestroy {
  private http = inject(HttpClient);
  private reader!: FingerprintReader;
  
  public exeDomain = 'http://localhost:3000'; // Default
  public activeDeviceId: string | null = null;
  private pollTimer: any = null;
  
  private statusSubject = new BehaviorSubject<string>('Initializing Reader...');
  public status$ = this.statusSubject.asObservable();

  private isConnectedSubject = new BehaviorSubject<boolean>(false);
  public isConnected$ = this.isConnectedSubject.asObservable();

  private sampleSubject = new Subject<string>();
  public sample$ = this.sampleSubject.asObservable();

  public get isConnected(): boolean {
    return this.isConnectedSubject.value;
  }

  private handleWindowFocus = () => {
    if (!this.isConnectedSubject.value) {
      this.checkConnection();
    }
  };

  constructor() {
    this.createReader();
    this.fetchExeDomain();
    this.initReader();
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', this.handleWindowFocus);
    }
  }

  public createReader() {
    if (this.reader) {
      try {
        this.reader.off('DeviceConnected');
        this.reader.off('DeviceDisconnected');
        this.reader.off('SamplesAcquired');
        this.reader.off('ErrorOccurred');
      } catch (e) {}
    }
    this.reader = new FingerprintReader();
    this.reader.on('DeviceConnected', this.onDeviceConnected.bind(this));
    this.reader.on('DeviceDisconnected', this.onDeviceDisconnected.bind(this));
    this.reader.on('SamplesAcquired', this.onSamplesAcquired.bind(this));
    this.reader.on('ErrorOccurred', this.onErrorOccurred.bind(this));
  }

  private fetchExeDomain() {
    this.http.get<{domain: string}>(`${environment.apiBaseUrl}/exe-domain`).subscribe({
      next: (res) => this.exeDomain = res.domain,
      error: () => console.warn('Could not fetch EXE domain')
    });
  }

  private initReader() {
    this.checkConnection();
    this.startPolling();
  }

  private startPolling() {
    if (this.pollTimer) return;
    this.pollTimer = setInterval(async () => {
      if (!this.isConnectedSubject.value) {
        await this.checkConnection();
      }
    }, 2000);
  }

  private stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }

  public async checkConnection(): Promise<boolean> {
    try {
      let devices: string[] = [];
      try {
        devices = await this.reader.enumerateDevices();
      } catch (firstErr) {
        // If connection failed (e.g. stale WebSdk port cached in sessionStorage after ADC service restart),
        // reset WebSdk configurator cache and retry once
        if (typeof window !== 'undefined') {
          if ((window as any).WebSdkCore?.configurator) {
            (window as any).WebSdkCore.configurator.m_port = null;
            (window as any).WebSdkCore.configurator.m_srp = null;
          }
          sessionStorage.removeItem('websdk');
          sessionStorage.removeItem('websdk.sessionId');
        }
        this.createReader();
        devices = await this.reader.enumerateDevices();
      }

      const hasDevice = Boolean(devices && devices.length > 0);
      this.activeDeviceId = hasDevice ? devices[0] : null;
      this.isConnectedSubject.next(hasDevice);
      if (hasDevice) {
        this.statusSubject.next('Device connected. Ready to scan.');
      } else {
        this.statusSubject.next('No fingerprint scanner detected. Please plug it in.');
      }
      return hasDevice;
    } catch (err) {
      console.warn('Failed to communicate with DigitalPersona service:', err);
      this.activeDeviceId = null;
      this.isConnectedSubject.next(false);
      this.statusSubject.next('DigitalPersona service not found.');
      return false;
    }
  }

  public async startCapture() {
    this.statusSubject.next('Waiting for scanner...');
    try {
      try {
        await this.reader.stopAcquisition();
      } catch (e) {}

      const targetDevice = this.activeDeviceId || '00000000-0000-0000-0000-000000000000';
      await this.reader.startAcquisition(SampleFormat.PngImage, targetDevice);
      this.statusSubject.next('Ready to scan');
    } catch (err: any) {
      console.error('Failed to start acquisition', err);
      this.statusSubject.next('Error: Cannot start scanner.');
    }
  }

  public async stopCapture() {
    try {
      const targetDevice = this.activeDeviceId || '00000000-0000-0000-0000-000000000000';
      await this.reader.stopAcquisition(targetDevice);
      this.statusSubject.next('Scanner stopped.');
    } catch (err) {
      console.error('Failed to stop acquisition', err);
    }
  }

  private async onDeviceConnected(event: DeviceConnected) {
    console.log('Biometric scanner connected event:', event);
    await this.checkConnection();
  }

  private async onDeviceDisconnected(event: DeviceDisconnected) {
    console.log('Biometric scanner disconnected event:', event);
    await this.checkConnection();
  }

  private onSamplesAcquired(event: SamplesAcquired) {
    this.statusSubject.next('Sample acquired successfully!');
    if (event.samples && event.samples.length > 0) {
      const sample = event.samples[0];
      let base64Data: string = '';
      
      if (typeof sample === 'string') {
        base64Data = sample;
      } else if ((sample as any).Data) {
        base64Data = (sample as any).Data;
      } else if (sample instanceof Uint8Array) {
        base64Data = btoa(String.fromCharCode.apply(null, Array.from(sample)));
      } else {
        try {
          const bytes = new Uint8Array(sample as any);
          base64Data = btoa(String.fromCharCode.apply(null, Array.from(bytes)));
        } catch (e) {
          this.statusSubject.next('Error: Invalid sample format');
          return;
        }
      }
      this.sampleSubject.next(base64Data);
    } else {
      this.statusSubject.next('Error: No sample data received');
    }
  }

  private onErrorOccurred(event: ErrorOccurred) {
    this.statusSubject.next('Scanner Error: ' + ((event as any).error?.message || (event as any).error));
  }

  ngOnDestroy() {
    this.stopPolling();
    this.stopCapture();
    if (typeof window !== 'undefined') {
      window.removeEventListener('focus', this.handleWindowFocus);
    }
    if (this.reader) {
      try {
        this.reader.off('DeviceConnected');
        this.reader.off('DeviceDisconnected');
        this.reader.off('SamplesAcquired');
        this.reader.off('ErrorOccurred');
      } catch (e) {}
    }
  }
}

