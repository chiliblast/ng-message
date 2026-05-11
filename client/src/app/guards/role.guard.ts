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

  // Type 5 users are restricted from the Home page
  if (user.type !== undefined && Number(user.type) === 5) {
    console.log('🚫 RoleGuard: Access restricted for Type 5 user. Redirecting to Send Messages.');
    router.navigate(['/messages/send']);
    return false;
  }

  return true;
};
