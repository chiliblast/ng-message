import { Component, inject, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DigitalPersonaService } from '../../../../services/digital-persona.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-dp-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, ButtonComponent],
  templateUrl: './dp-registration.component.html',
  styles: ``
})
export class DpRegistrationComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  public dpService = inject(DigitalPersonaService);

  loading = false;
  isScanning = false;
  password = '';
  showPassword = false;

  // Direct download link from server-java-ant offline repository
  public adcDownloadUrl = `${environment.biometricApiUrl}/downloads/HID%20Authentication%20Device%20Client.exe`;

  isConnected$ = this.dpService.isConnected$;
  status$ = this.dpService.status$;
  private captureSub!: Subscription;
  private connectSub?: Subscription;

  get currentUsername(): string {
    const user = this.authService.currentUserValue;
    return user ? (user.username || user.defaultUsername || user.name || '') : '';
  }

  ngOnInit() {
    this.dpService.checkConnection();
    
    this.connectSub = this.dpService.isConnected$.subscribe(connected => {
      if (!connected && this.isScanning) {
        this.isScanning = false;
        this.dpService.stopCapture();
        this.toastService.show('Biometric scanner disconnected.', 'error');
      }
    });

    this.captureSub = this.dpService.sample$.subscribe(base64Image => {
      if (this.isScanning && !this.loading) {
        this.isScanning = false;
        this.registerFingerprint(base64Image);
      }
    });
  }

  ngOnDestroy() {
    if (this.captureSub) this.captureSub.unsubscribe();
    if (this.connectSub) this.connectSub.unsubscribe();
    this.dpService.stopCapture();
  }

  onClose() {
    this.dpService.stopCapture();
    this.password = '';
    this.showPassword = false;
    this.isScanning = false;
    this.loading = false;
    this.close.emit();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async retryBiometricConnection() {
    this.dpService.createReader();
    const connected = await this.dpService.checkConnection();
    if (connected) {
      this.toastService.show('DigitalPersona scanner connected!', 'success');
    } else {
      this.toastService.show('Scanner not detected. Please verify USB connection or ADC service.', 'error');
    }
  }

  async startScan() {
    if (!this.password.trim()) {
      this.toastService.show('Please enter your password to confirm identity.', 'error');
      return;
    }
    if (!this.dpService.isConnected) {
      this.toastService.show('Fingerprint scanner not detected. Please plug in your device.', 'error');
      return;
    }
    this.isScanning = true;
    await this.dpService.startCapture();
  }

  private registerFingerprint(base64Image: string) {
    if (!base64Image) return;

    const username = this.currentUsername;
    if (!username) {
      this.toastService.show('You must be logged in to register biometrics.', 'error');
      return;
    }

    if (!this.password.trim()) {
      this.toastService.show('Please enter your password to confirm registration.', 'error');
      return;
    }

    this.loading = true;

    const payload = {
      username: username,
      password: this.password.trim(),
      finger: base64Image
    };

    console.log('🖐️ [server-java-ant Fingerprint Registration] Submitting fingerprint template for:', payload.username);

    this.authService.registerFinger(payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.isScanning = false;
        this.toastService.show(res?.message || 'Fingerprint template registered successfully on server-java-ant!', 'success');
        setTimeout(() => {
          this.onClose();
        }, 1200);
      },
      error: (err: any) => {
        this.loading = false;
        this.isScanning = false;
        const msg = err.error?.message || err.message || 'Fingerprint registration failed. Please try again.';
        this.toastService.show(msg, 'error');
      }
    });
  }
}
