import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../form/label/label.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// Import local WebSDK file to register WebSdk on the global window namespace
import '../../../../core/modules/WebSdk';
import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';
import { Base64 } from '@digitalpersona/core';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  private domSanitizer = inject(DomSanitizer);

  showPassword = false;
  isChecked = false;
  loading = false;

  username = '';
  password = '';

  // Fingerprint reader state
  hasFingerprintReader = false;
  isFingerprintScanning = false;
  fingerprintStatus = '';
  fingerprintImg: SafeUrl | null = null;
  private reader: any = null;

  ngOnInit() {
    this.initFingerprintReader();
  }

  ngOnDestroy() {
    this.stopFingerprintAcquisition();
  }

  async initFingerprintReader() {
    try {
      this.reader = new FingerprintReader();
      
      this.reader.on('DeviceConnected', () => {
        this.hasFingerprintReader = true;
        this.fingerprintStatus = 'Fingerprint reader connected. Click to scan.';
        this.toastService.show('Fingerprint reader connected', 'success');
      });
      
      this.reader.on('DeviceDisconnected', () => {
        this.hasFingerprintReader = false;
        this.fingerprintStatus = 'Fingerprint reader disconnected.';
        this.toastService.show('Fingerprint reader disconnected', 'warning');
      });
      
      this.reader.on('SamplesAcquired', (event: any) => {
        this.onFingerprintSamplesAcquired(event);
      });

      // Query connected devices
      const devices = await this.reader.enumerateDevices();
      if (devices && devices.length > 0) {
        this.hasFingerprintReader = true;
        this.fingerprintStatus = 'Fingerprint reader ready. Click to scan.';
      } else {
        this.hasFingerprintReader = false;
        this.fingerprintStatus = 'No fingerprint reader detected.';
      }
    } catch (error) {
      console.warn('Fingerprint service or reader not detected:', error);
      this.hasFingerprintReader = false;
      this.fingerprintStatus = 'Fingerprint service not running.';
    }
  }

  async startFingerprintScan() {
    if (!this.reader) {
      this.toastService.show('Fingerprint reader is not initialized.', 'error');
      return;
    }
    this.isFingerprintScanning = true;
    this.fingerprintStatus = 'Scanning... Please place your finger on the reader.';
    try {
      await this.reader.startAcquisition(SampleFormat.PngImage);
    } catch (error) {
      console.error('Failed to start fingerprint scan:', error);
      this.fingerprintStatus = 'Scan failed. Please try again.';
      this.isFingerprintScanning = false;
    }
  }

  async stopFingerprintAcquisition() {
    if (this.reader && this.isFingerprintScanning) {
      try {
        await this.reader.stopAcquisition();
      } catch (e) {}
      this.isFingerprintScanning = false;
    }
  }

  private onFingerprintSamplesAcquired(event: any) {
    if (!event.samples || event.samples.length === 0) {
      this.fingerprintStatus = 'Scan failed: No samples captured.';
      this.isFingerprintScanning = false;
      return;
    }

    const rawData = event.samples[0];
    const base64ImageData = Base64.fromBase64Url(rawData);
    this.fingerprintImg = this.domSanitizer.bypassSecurityTrustUrl(
      `data:image/png;base64, ${base64ImageData}`
    );
    this.fingerprintStatus = 'Fingerprint captured. Verifying...';
    this.stopFingerprintAcquisition();

    this.loading = true;
    this.authService.loginWithFingerprint(base64ImageData).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Fingerprint Login successful!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errMsg = err.error?.message || err.message || 'Biometric authentication failed';
        this.toastService.show(errMsg, 'error');
        this.fingerprintStatus = 'Verification failed. Try again.';
      }
    });
  }

  simulateFingerprintScan() {
    this.isFingerprintScanning = true;
    this.fingerprintStatus = 'Simulating scan... Place your finger.';
    
    setTimeout(() => {
      const mockBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
      this.fingerprintImg = this.domSanitizer.bypassSecurityTrustUrl(
        `data:image/png;base64, ${mockBase64}`
      );
      this.fingerprintStatus = 'Simulated fingerprint captured. Verifying...';
      this.isFingerprintScanning = false;

      this.loading = true;
      this.authService.loginWithFingerprint(mockBase64).subscribe({
        next: (res: any) => {
          this.loading = false;
          this.toastService.show(res?.message || 'Fingerprint Login successful (Simulated)!', 'success');
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.loading = false;
          const errMsg = err.error?.message || err.message || 'Biometric authentication failed';
          this.toastService.show(errMsg, 'error');
          this.fingerprintStatus = 'Verification failed.';
        }
      });
    }, 1500);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    this.loading = true;
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Logged in successfully!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errMsg = err.error?.message || (typeof err.error === 'string' ? err.error : null) || err.message || 'Server Error';
        this.toastService.show(errMsg, 'error');
      }
    });
  }
}
