import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../form/label/label.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DigitalPersonaService } from '../../../../services/digital-persona.service';
import { DpLoginComponent } from '../dp-login/dp-login.component';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule,
    DpLoginComponent
  ],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  public dpService = inject(DigitalPersonaService);

  @ViewChild(DpLoginComponent) dpLogin?: DpLoginComponent;

  showPassword = false;
  isChecked = false;
  loading = false;

  username = '';
  password = '';
  step: 1 | 2 = 1;
  biometricMode: 'webauthn' | 'dp' = 'dp';
  
  // Hardcoded flag for biometric requirement
  requireBiometric = true;
  isCredentialsAuthenticated = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async retryBiometricConnection() {
    this.toastService.show('Checking biometric device connection...', 'info');
    const ok = await this.dpService.checkConnection();
    if (ok) {
      this.toastService.show('Biometric device connected and ready!', 'success');
      if (this.isCredentialsAuthenticated && this.dpLogin) {
        this.dpLogin.startScan();
      }
    } else {
      this.toastService.show('No biometric device detected. Please connect your scanner.', 'error');
    }
  }

  cancelScan() {
    this.isCredentialsAuthenticated = false;
    if (this.dpLogin) {
      this.dpLogin.onCancel();
    }
    this.toastService.show('Fingerprint scan cancelled.', 'info');
  }

  onSignIn() {
    this.loading = true;
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (this.requireBiometric) {
          this.isCredentialsAuthenticated = true;
          this.toastService.show('Credentials verified. Please scan your fingerprint.', 'info');
          if (this.dpLogin) {
            this.dpLogin.startScan();
          }
        } else {
          // Skip biometrics and log in immediately
          this.toastService.show(res?.message || 'Logged in successfully!', 'success');
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.isCredentialsAuthenticated = false;
        const errMsg = err.error?.message || (typeof err.error === 'string' ? err.error : null) || err.message || 'Invalid username or password';
        this.toastService.show(errMsg, 'error');
      }
    });
  }
}
