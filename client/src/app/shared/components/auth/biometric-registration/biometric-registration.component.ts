import { Component, inject, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-biometric-registration',
  standalone: true,
  imports: [CommonModule, ModalComponent, ButtonComponent],
  templateUrl: './biometric-registration.component.html',
  styles: ``
})
export class BiometricRegistrationComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
  private authService = inject(AuthService);
  private toastService = inject(ToastService);

  loading = false;
  statusText = 'Ready to register your passkey.';

  onClose() {
    this.close.emit();
    this.statusText = 'Ready to register your passkey.';
  }

  async startRegistration() {
    if (!window.PublicKeyCredential) {
      this.toastService.show('WebAuthn is not supported in this browser.', 'error');
      return;
    }

    this.loading = true;
    this.statusText = 'Waiting for security prompt...';

    const user = this.authService.currentUserValue;
    if (!user) {
      this.toastService.show('You must be logged in to register a passkey.', 'error');
      this.loading = false;
      return;
    }

    try {
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);

      const credential = await navigator.credentials.create({
        publicKey: {
          challenge: challenge,
          rp: {
            name: "ng-message Secure Systems",
            id: window.location.hostname
          },
          user: {
            id: new TextEncoder().encode(user.uuid || 'user-uuid-mock'),
            name: user.username,
            displayName: user.displayName || user.username
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 },
            { type: "public-key", alg: -257 }
          ],
          timeout: 60000,
          authenticatorSelection: {
            authenticatorAttachment: 'platform',
            userVerification: 'required',
            residentKey: 'required'
          },
          attestation: 'direct'
        }
      });

      if (credential) {
        this.statusText = 'Key generated. Sending to server...';
        const pkCredential = credential as PublicKeyCredential;

        const bufferToBase64url = (buffer: ArrayBuffer) => {
          const bytes = new Uint8Array(buffer);
          let str = '';
          for (const charCode of bytes) {
            str += String.fromCharCode(charCode);
          }
          return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        };

        const rawId = bufferToBase64url(pkCredential.rawId);
        let clientDataJSON = '';
        let attestationObject = '';
        
        const response = pkCredential.response as any;
        if (response.clientDataJSON) {
          clientDataJSON = bufferToBase64url(response.clientDataJSON);
        }
        if (response.attestationObject) {
          attestationObject = bufferToBase64url(response.attestationObject);
        }

        const registrationPayload = {
          userId: user.id || user.uuid,
          username: user.username,
          credential: {
            id: pkCredential.id,
            rawId: rawId,
            type: pkCredential.type,
            response: {
              clientDataJSON: clientDataJSON,
              attestationObject: attestationObject
            }
          }
        };

        this.authService.registerBiometric(registrationPayload).subscribe({
          next: (res: any) => {
            this.loading = false;
            this.toastService.show(res?.message || 'Biometric registered successfully!', 'success');
            this.onClose();
          },
          error: (err) => {
            this.loading = false;
            this.toastService.show(err.error?.message || 'Registration failed', 'error');
            this.statusText = 'Registration failed. Try again.';
          }
        });
      }
    } catch (error: any) {
      this.loading = false;
      this.statusText = 'Registration canceled or failed.';
      this.toastService.show(error.message || 'Canceled', 'error');
    }
  }
}
