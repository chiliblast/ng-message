import { Component, inject, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-biometric-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biometric-login.component.html',
  styles: ``
})
export class BiometricLoginComponent {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  @Input() loading = false;
  @Input() username = 'user'; // Accept username dynamically
  @Output() loadingChange = new EventEmitter<boolean>();

  isWebAuthnScanning = false;
  webAuthnStatus = '';

  private setLoading(state: boolean) {
    this.loading = state;
    this.loadingChange.emit(this.loading);
  }

  async startWebAuthnLogin() {
    if (!window.PublicKeyCredential) {
      this.toastService.show('WebAuthn is not supported in this browser.', 'error');
      return;
    }

    this.isWebAuthnScanning = true;
    this.webAuthnStatus = 'Waiting for authentication...';

    try {
      // Create a mock challenge for the native WebAuthn API
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);

      // For this mock, we use 'create' with 'platform' attachment to force Windows Hello
      // to prompt for a new passkey. In a real flow, you'd use 'get' for login.
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge: challenge,
          rp: {
            name: "ng-message WebAuthn",
            id: window.location.hostname
          },
          user: {
            id: new Uint8Array(16),
            name: this.username || "user",
            displayName: (this.username || "ng-message User") + " (ng-message)"
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 },
            { type: "public-key", alg: -257 }
          ],
          timeout: 60000,
          authenticatorSelection: {
            authenticatorAttachment: 'platform', // This forces the local device (Windows Hello)
            userVerification: 'required',
            residentKey: 'required'
          }
        }
      });

      if (credential) {
        this.webAuthnStatus = 'Authentication successful. Verifying...';
        this.setLoading(true);

        // Convert raw credential data to base64url or similar if needed for a real backend.
        // For the mock, we just pass an identifier indicating it was a WebAuthn login.
        this.authService.loginWithWebAuthn(credential).subscribe({
          next: (res: any) => {
            this.setLoading(false);
            this.toastService.show(res?.message || 'Biometric Login successful!', 'success');
            this.router.navigate(['/']);
          },
          error: (err) => {
            this.setLoading(false);
            const errMsg = err.error?.message || err.message || 'Authentication failed';
            this.toastService.show(errMsg, 'error');
            this.webAuthnStatus = 'Verification failed. Try again.';
          }
        });
      }
    } catch (error: any) {
      console.error('WebAuthn error:', error);
      this.webAuthnStatus = 'Authentication failed or canceled.';
      this.toastService.show(error.message || 'Biometric authentication canceled', 'error');
    } finally {
      this.isWebAuthnScanning = false;
    }
  }
}
