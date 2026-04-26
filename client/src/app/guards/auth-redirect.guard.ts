import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authRedirectGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    router.navigate(['/']); // Redirect to home if already logged in
    return false;
  }

  return true;
};
