import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../form/label/label.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { BiometricLoginComponent } from '../biometric-login/biometric-login.component';

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
    BiometricLoginComponent
  ],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  showPassword = false;
  isChecked = false;
  loading = false;

  username = '';
  password = '';
  step: 1 | 2 = 1;
  
  // Hardcoded flag for biometric requirement
  requireBiometric = true;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    this.loading = true;
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (this.requireBiometric) {
          // Proceed to 2FA biometric step instead of redirecting
          this.step = 2;
          this.toastService.show(res?.message || 'Credentials accepted. Please verify identity.', 'success');
        } else {
          // Skip biometrics and log in immediately
          this.toastService.show(res?.message || 'Logged in successfully!', 'success');
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        this.loading = false;
        const errMsg = err.error?.message || (typeof err.error === 'string' ? err.error : null) || err.message || 'Server Error';
        this.toastService.show(errMsg, 'error');
      }
    });
  }
}
