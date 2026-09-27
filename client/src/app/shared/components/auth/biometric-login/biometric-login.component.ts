import { Component, inject, Output, EventEmitter, Input, OnInit } from '@angular/core';
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
export class BiometricLoginComponent implements OnInit {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  @Input() loading = false;
  @Input() username = 'user'; // Accept username dynamically
  @Output() loadingChange = new EventEmitter<boolean>();
  @Output() goBack = new EventEmitter<void>();

  isWebAuthnScanning = false;
  webAuthnStatus = '';
  showBackButton = false;

  ngOnInit() {
    // Automatically trigger the WebAuthn prompt when this component is loaded (Step 2)
    setTimeout(() => {
      this.startWebAuthnLogin();
    }, 500); // Slight delay for smoother UI transition
  }

  private setLoading(state: boolean) {
    this.loading = state;
    this.loadingChange.emit(this.loading);
  }

  async startWebAuthnLogin() {
    if (!window.PublicKeyCredential) {
      this.toastService.show('WebAuthn is not supported in this browser.', 'error');
      this.showBackButton = true;
      return;
    }

    this.isWebAuthnScanning = true;
    this.showBackButton = false;
    this.webAuthnStatus = 'Waiting for authentication...';

    try {
      // Create a mock challenge for the native WebAuthn API
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);

      // In a real application, you would fetch the user's registered credential IDs
      // from the server before calling 'get', and pass them in 'allowCredentials'.
      // This tells Windows Hello to ONLY ask for the passkey belonging to that specific user,
      // skipping the selection list entirely.
      
      // const mockCredentialIdFromServer = new Uint8Array([...]); // fetched from DB

      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: challenge,
          timeout: 60000,
          userVerification: 'required',
          /*
          allowCredentials: [{
            type: 'public-key',
            id: mockCredentialIdFromServer,
            transports: ['internal']
          }]
          */
        }
      });

      if (credential) {
        this.webAuthnStatus = 'Authentication successful. Verifying...';
        this.setLoading(true);

        const pkCredential = credential as PublicKeyCredential;

        // Helper to convert ArrayBuffer to Base64URL string (standard for WebAuthn)
        const bufferToBase64url = (buffer: ArrayBuffer) => {
          const bytes = new Uint8Array(buffer);
          let str = '';
          for (const charCode of bytes) {
            str += String.fromCharCode(charCode);
          }
          return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        };

        // Extract the cryptographic keys and identifiers
        const rawId = bufferToBase64url(pkCredential.rawId);
        
        let clientDataJSON = '';
        let authenticatorData = '';
        let signature = '';
        let userHandle = '';
        
        // TypeScript safe cast for the response object
        const response = pkCredential.response as any;
        
        if (response.clientDataJSON) {
          clientDataJSON = bufferToBase64url(response.clientDataJSON);
        }
        if (response.authenticatorData) {
          authenticatorData = bufferToBase64url(response.authenticatorData);
        }
        if (response.signature) {
          signature = bufferToBase64url(response.signature);
        }
        if (response.userHandle) {
          userHandle = bufferToBase64url(response.userHandle);
        }

        const cryptographicPayload = {
          id: pkCredential.id,
          rawId: rawId,
          type: pkCredential.type,
          response: {
            clientDataJSON: clientDataJSON,
            authenticatorData: authenticatorData,
            signature: signature,
            userHandle: userHandle
          },
          username: this.username // Attach the user this key belongs to
        };

        // For the mock, we pass this formatted cryptographic payload.
        this.authService.loginWithWebAuthn(cryptographicPayload).subscribe({
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
            this.showBackButton = true;
          }
        });
      }
    } catch (error: any) {
      console.error('WebAuthn error:', error);
      this.webAuthnStatus = 'Authentication failed or canceled.';
      this.toastService.show(error.message || 'Biometric authentication canceled', 'error');
      this.showBackButton = true;
    } finally {
      this.isWebAuthnScanning = false;
    }
  }
}
