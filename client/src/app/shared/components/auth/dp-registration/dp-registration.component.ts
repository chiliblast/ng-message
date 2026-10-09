import { Component, inject, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DigitalPersonaService } from '../../../../services/digital-persona.service';
import { Subscription } from 'rxjs';

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

  isConnected$ = this.dpService.isConnected$;
  status$ = this.dpService.status$;
  private captureSub!: Subscription;

  ngOnInit() {
    this.dpService.checkConnection();
    
    this.captureSub = this.dpService.sample$.subscribe(base64Image => {
      this.isScanning = false;
      this.registerFingerprint(base64Image);
    });
  }

  ngOnDestroy() {
    if (this.captureSub) this.captureSub.unsubscribe();
    this.dpService.stopCapture();
  }

  onClose() {
    this.close.emit();
    this.password = '';
    this.isScanning = false;
    this.dpService.stopCapture();
  }

  async startScan() {
    if (!this.password) {
      this.toastService.show('Please enter your password.', 'error');
      return;
    }
    this.isScanning = true;
    await this.dpService.startCapture();
  }

  private registerFingerprint(base64Image: string) {
    const user = this.authService.currentUserValue;
    if (!user) {
      this.toastService.show('You must be logged in to register a passkey.', 'error');
      return;
    }

    this.loading = true;

    const payload = {
      userId: user.id || user.uuid,
      username: user.username,
      password: this.password,
      base64Image: base64Image
    };

    // Assuming a mock endpoint for registration
    this.authService.registerRawBiometric(payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Biometric registered successfully!', 'success');
        this.onClose();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.show(err.error?.message || 'Registration failed', 'error');
      }
    });
  }
}
