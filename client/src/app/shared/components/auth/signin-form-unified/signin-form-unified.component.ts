import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../form/label/label.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DigitalPersonaService } from '../../../../services/digital-persona.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin-form-unified',
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './signin-form-unified.component.html',
  styles: ``
})
export class SigninFormUnifiedComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  public dpService = inject(DigitalPersonaService);

  showPassword = false;
  loading = false;
  isScanning = false;

  username = '';
  password = '';
  
  // Biometric requirement flag
  requireBiometric = true;

  private sampleSub?: Subscription;
  private connectSub?: Subscription;

  ngOnInit() {
    // Check initial scanner status
    this.dpService.checkConnection();

    // Listen for device connection changes
    this.connectSub = this.dpService.isConnected$.subscribe(connected => {
      if (!connected && this.isScanning) {
        this.isScanning = false;
        this.dpService.stopCapture();
        this.toastService.show('Biometric device was disconnected during scan.', 'error');
      }
    });

    // Listen for captured fingerprint sample
    this.sampleSub = this.dpService.sample$.subscribe(base64Image => {
      if (this.isScanning) {
        this.onSampleCaptured(base64Image);
      }
    });
  }

  ngOnDestroy() {
    if (this.connectSub) this.connectSub.unsubscribe();
    if (this.sampleSub) this.sampleSub.unsubscribe();
    if (this.isScanning) {
      this.dpService.stopCapture();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async retryBiometricConnection() {
    this.toastService.show('Checking biometric device connection...', 'info');
    const ok = await this.dpService.checkConnection();
    if (ok) {
      this.toastService.show('Biometric device connected and ready!', 'success');
    } else {
      this.toastService.show('No biometric device detected. Please connect your scanner.', 'error');
    }
  }

  async onSignIn() {
    if (this.loading) return;

    // 1. Validate entered credentials
    if (!this.username.trim()) {
      this.toastService.show('Please enter your username.', 'error');
      return;
    }
    if (!this.password) {
      this.toastService.show('Please enter your password.', 'error');
      return;
    }

    // 2. If biometric is required, immediately trigger fingerprint scanning
    if (this.requireBiometric) {
      if (!this.dpService.isConnected) {
        this.toastService.show('Biometric scanner not detected. Please ensure scanner is connected.', 'error');
        return;
      }

      this.isScanning = true;
      this.toastService.show('Please place your finger on the scanner to authenticate.', 'info');
      await this.dpService.startCapture();
    } else {
      // Fallback if biometric verification is disabled
      this.loginStandard();
    }
  }

  async cancelScan() {
    if (!this.isScanning) return;
    this.isScanning = false;
    await this.dpService.stopCapture();
    this.toastService.show('Fingerprint scan cancelled.', 'info');
  }

  async onScannerIconClick() {
    if (!this.dpService.isConnected) {
      await this.retryBiometricConnection();
      return;
    }

    if (this.isScanning) {
      await this.cancelScan();
      return;
    }

    // If scanner is ready, prompt user
    if (!this.username.trim() || !this.password) {
      this.toastService.show('Please enter your username and password, then click Sign in.', 'info');
      return;
    }

    await this.onSignIn();
  }

  private onSampleCaptured(base64Image: string) {
    this.isScanning = false;
    this.loading = true;

    console.log(`🔐 [Unified Sign In] Submitting Username, Password, and Fingerprint to server:`);
    console.log(`   👤 Username:`, this.username);
    console.log(`   🔑 Password:`, this.password ? '****** (' + this.password.length + ' chars)' : '(empty)');
    console.log(`   🖐️ Base64 Image length:`, base64Image?.length);
    console.log(`   🖐️ Base64 Image:`, base64Image);

    const payload = {
      username: this.username,
      password: this.password,
      base64Image: base64Image
    };

    // Send all three to server for single-step authentication
    this.authService.loginWithBiometric(payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Authentication successful!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errMsg = err.error?.message || (typeof err.error === 'string' ? err.error : null) || err.message || 'Authentication failed. Please try again.';
        this.toastService.show(errMsg, 'error');
      }
    });
  }

  private loginStandard() {
    this.loading = true;
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Logged in successfully!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errMsg = err.error?.message || err.message || 'Invalid username or password';
        this.toastService.show(errMsg, 'error');
      }
    });
  }
}
