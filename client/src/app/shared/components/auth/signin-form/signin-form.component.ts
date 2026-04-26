
import { Component } from '@angular/core';
import { LabelComponent } from '../../form/label/label.component';
import { CheckboxComponent } from '../../form/input/checkbox.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [
    LabelComponent,
    CheckboxComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule
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

  username = '';
  password = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: () => {
        this.toastService.show('Logged in successfully!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.toastService.show(err.error?.message || 'Invalid credentials', 'error');
      }
    });
  }
}
