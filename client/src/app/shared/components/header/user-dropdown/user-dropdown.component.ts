import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownItemTwoComponent } from '../../ui/dropdown/dropdown-item/dropdown-item.component-two';
import { BiometricRegistrationComponent } from '../../auth/biometric-registration/biometric-registration.component';

import { inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  imports:[CommonModule,RouterModule,DropdownComponent,DropdownItemTwoComponent,BiometricRegistrationComponent]
})
export class UserDropdownComponent {
  private authService = inject(AuthService);
  user$ = this.authService.user$;
  
  @Input() user: any;
  isOpen = false;
  isBiometricModalOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  openBiometricModal() {
    this.closeDropdown();
    this.isBiometricModalOpen = true;
  }

  closeBiometricModal() {
    this.isBiometricModalOpen = false;
  }

  onLogout() {
    this.authService.logout();
  }
}