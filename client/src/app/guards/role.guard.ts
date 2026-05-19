import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Prevents "Type 5" users from accessing restricted pages like Home.
 */
export const roleGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.currentUserValue;
  
  if (!user) return true;

  // Non-ADMIN users are restricted from the Home page
  if (user.role !== undefined && user.role !== 'ADMIN') {
    console.log('🚫 RoleGuard: Access restricted for non-ADMIN user. Redirecting to Send Messages.');
    router.navigate(['/messages/send']);
    return false;
  }

  return true;
};
