import { Component, inject, OnInit, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DigitalPersonaService } from '../../../../services/digital-persona.service';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dp-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dp-login.component.html'
})
export class DpLoginComponent implements OnInit, OnDestroy, OnChanges {
  public dpService = inject(DigitalPersonaService);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  @Input() enabled = false;
  @Input() loading = false;
  @Input() username = 'user';
  @Input() password = '';
  @Output() loadingChange = new EventEmitter<boolean>();
  @Output() goBack = new EventEmitter<void>();
  @Output() scanCancelled = new EventEmitter<void>();

  isConnected$ = this.dpService.isConnected$;
  status$ = this.dpService.status$;
  isScanning = false;
  private captureSub!: Subscription;
  private connectSub!: Subscription;

  ngOnInit() {
    this.dpService.checkConnection();

    this.connectSub = this.dpService.isConnected$.subscribe(connected => {
      if (connected && this.enabled && !this.isScanning) {
        this.startScan();
      } else if (!connected && this.isScanning) {
        this.isScanning = false;
        this.dpService.stopCapture();
      }
    });

    this.captureSub = this.dpService.sample$.subscribe(base64Image => {
      this.isScanning = false;
      this.sendToCentralServer(base64Image);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['enabled']) {
      if (changes['enabled'].currentValue && !this.isScanning) {
        if (this.dpService.isConnected) {
          this.startScan();
        }
      } else if (!changes['enabled'].currentValue && this.isScanning) {
        this.onCancel();
      }
    }
  }

  ngOnDestroy() {
    if (this.connectSub) this.connectSub.unsubscribe();
    if (this.captureSub) this.captureSub.unsubscribe();
    this.dpService.stopCapture();
  }

  async onScannerClick() {
    if (!this.dpService.isConnected) {
      this.toastService.show('Checking scanner connection...', 'info');
      const ok = await this.dpService.checkConnection();
      if (!ok) {
        this.toastService.show('Biometric scanner not detected. Please plug it in and verify ADC.', 'error');
        return;
      }
      this.toastService.show('Biometric scanner connected!', 'success');
      if (this.enabled) {
        await this.startScan();
        return;
      }
    }

    if (!this.enabled) {
      this.toastService.show('Scanner is connected & ready! Please click "Sign in" to verify credentials and scan.', 'info');
      return;
    }

    if (this.isScanning) {
      await this.onCancel();
    } else {
      await this.startScan();
    }
  }

  async startScan() {
    if (!this.dpService.isConnected || !this.enabled) return;
    if (this.isScanning) return;
    this.isScanning = true;
    await this.dpService.startCapture();
  }

  async onCancel() {
    this.isScanning = false;
    await this.dpService.stopCapture();
    this.scanCancelled.emit();
    this.goBack.emit();
  }

  private sendToCentralServer(base64Image: string) {
    this.loading = true;
    this.loadingChange.emit(true);

    console.log(`🔑 [Mock API Biometric] Username:`, this.username);
    console.log(`🔑 [Mock API Biometric] Base64 Image:`, base64Image);

    const payload = {
      username: this.username,
      password: this.password,
      base64Image: base64Image
    };

    this.authService.loginWithRawImage(payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.loadingChange.emit(false);
        this.toastService.show(res?.message || 'Biometric Login successful!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        this.loadingChange.emit(false);
        const errMsg = err.error?.message || err.message || 'Authentication failed';
        this.toastService.show(errMsg, 'error');
      }
    });
  }
}
