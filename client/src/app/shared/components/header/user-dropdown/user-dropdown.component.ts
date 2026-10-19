import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownItemTwoComponent } from '../../ui/dropdown/dropdown-item/dropdown-item.component-two';
import { BiometricRegistrationComponent } from '../../auth/biometric-registration/biometric-registration.component';
import { DpRegistrationComponent } from '../../auth/dp-registration/dp-registration.component';
import { FaceRegistrationComponent } from '../../auth/face-registration/face-registration.component';
import { CaptchaModalComponent } from '../../auth/captcha-modal/captcha-modal.component';

import { inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  imports: [
    CommonModule,
    RouterModule,
    DropdownComponent,
    DropdownItemTwoComponent,
    BiometricRegistrationComponent,
    DpRegistrationComponent,
    FaceRegistrationComponent,
    CaptchaModalComponent
  ]
})
export class UserDropdownComponent {
  private authService = inject(AuthService);
  user$ = this.authService.user$;
  
  @Input() user: any;
  isOpen = false;
  isBiometricModalOpen = false;
  isDpModalOpen = false;
  isFaceModalOpen = false;
  isCaptchaModalOpen = false;


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

  openDpModal() {
    this.closeDropdown();
    this.isDpModalOpen = true;
  }

  closeDpModal() {
    this.isDpModalOpen = false;
  }

  openFaceModal() {
    this.closeDropdown();
    this.isFaceModalOpen = true;
  }

  closeFaceModal() {
    this.isFaceModalOpen = false;
  }

  openCaptchaModal() {

    this.closeDropdown();
    this.isCaptchaModalOpen = true;
  }

  closeCaptchaModal() {
    this.isCaptchaModalOpen = false;
  }

  onLogout() {
    this.authService.logout();
  }
}