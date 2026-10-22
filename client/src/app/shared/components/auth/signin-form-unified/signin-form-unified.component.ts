import { Component, inject, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../form/label/label.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DigitalPersonaService } from '../../../../services/digital-persona.service';
import { DigitalPersonaFaceService } from '../../../../services/digital-persona-face.service';
import { Subscription, firstValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-signin-form-unified',
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './signin-form-unified.component.html',
  styles: ``
})
export class SigninFormUnifiedComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  public dpService = inject(DigitalPersonaService);
  public faceService = inject(DigitalPersonaFaceService);

  @ViewChild('faceVideo') faceVideoRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('captureCanvas') captureCanvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('displayCanvas') displayCanvasRef?: ElementRef<HTMLCanvasElement>;

  // Download URL for HID Authentication Device Client Setup from server-java-ant
  public adcDownloadUrl = `${environment.biometricApiUrl}/downloads/HID%20Authentication%20Device%20Client.exe`;

  showPassword = false;
  loading = false;
  isScanning = false;

  username = '';
  password = '';
  
  // 3 Authentication Options: 'password' | 'fingerprint' | 'face'
  authMethod: 'password' | 'fingerprint' | 'face' = 'password';

  // Biometric enrollment state from server-java-ant
  userEnrolledBiometric: boolean | null = null;
  userBiometricInfo: { hasFace: boolean; hasFingerprint: boolean; requiresBiometric: boolean; fingerprintEnrolledAt?: string | null; faceEnrolledAt?: string | null } | null = null;

  // Selected biometric modality alias for scanner / camera UI
  biometricMode: 'fingerprint' | 'face' = 'fingerprint';
  faceStatus = 'Ready';
  isMirrored = true;
  faceVerified = false;
  lastCapturedLength = 0;

  private usernameDebounceTimer: any = null;
  private sampleSub?: Subscription;
  private connectSub?: Subscription;
  private faceSampleSub?: Subscription;
  private faceStatusSub?: Subscription;

  ngOnInit() {
    // Check initial scanner status
    this.dpService.checkConnection();

    // Listen for device connection changes
    this.connectSub = this.dpService.isConnected$.subscribe(connected => {
      if (!connected && this.isScanning && this.authMethod === 'fingerprint') {
        this.isScanning = false;
        this.dpService.stopCapture();
        this.toastService.show('Biometric device was disconnected during scan.', 'error');
      }
    });

    // Listen for captured fingerprint sample
    this.sampleSub = this.dpService.sample$.subscribe(base64Image => {
      if (this.isScanning && this.authMethod === 'fingerprint') {
        this.onSampleCaptured(base64Image, 'fingerprint');
      }
    });

    // Listen for captured face sample
    this.faceSampleSub = this.faceService.faceSample$.subscribe(base64Image => {
      if (this.isScanning && this.authMethod === 'face') {
        this.onSampleCaptured(base64Image, 'face');
      }
    });

    // Listen for face scan status updates
    this.faceStatusSub = this.faceService.status$.subscribe(status => {
      this.faceStatus = status;
    });
  }

  ngOnDestroy() {
    if (this.usernameDebounceTimer) clearTimeout(this.usernameDebounceTimer);
    if (this.connectSub) this.connectSub.unsubscribe();
    if (this.sampleSub) this.sampleSub.unsubscribe();
    if (this.faceSampleSub) this.faceSampleSub.unsubscribe();
    if (this.faceStatusSub) this.faceStatusSub.unsubscribe();
    this.cancelScan();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleMirror() {
    this.isMirrored = !this.isMirrored;
    this.faceService.setMirror(this.isMirrored);
  }

  setAuthMethod(method: 'password' | 'fingerprint' | 'face') {
    if (this.authMethod === method) return;
    if (this.isScanning) {
      this.cancelScan();
    }
    this.authMethod = method;
    if (method === 'face') {
      this.biometricMode = 'face';
    } else if (method === 'fingerprint') {
      this.biometricMode = 'fingerprint';
    }
  }

  setBiometricMode(mode: 'fingerprint' | 'face') {
    this.setAuthMethod(mode);
  }

  onUsernameChange() {
    if (this.usernameDebounceTimer) {
      clearTimeout(this.usernameDebounceTimer);
    }
    const trimmed = this.username?.trim();
    if (!trimmed) {
      this.userEnrolledBiometric = null;
      this.userBiometricInfo = null;
      return;
    }
    this.usernameDebounceTimer = setTimeout(() => {
      this.checkUserBiometrics();
    }, 350);
  }

  async retryBiometricConnection() {
    this.toastService.show('Checking biometric device connection...', 'info');
    const ok = await this.dpService.checkConnection();
    if (ok) {
      this.toastService.show('Biometric device connected and ready!', 'success');
    } else {
      this.toastService.show('No biometric device detected. Please connect your scanner.', 'error');
    }
  }

  async checkUserBiometrics() {
    const trimmed = this.username?.trim();
    if (!trimmed) {
      this.userEnrolledBiometric = null;
      this.userBiometricInfo = null;
      return;
    }

    try {
      const info = await firstValueFrom(this.authService.getUserBiometrics(trimmed));
      this.userBiometricInfo = info;
      const hasFace = !!(info && info.hasFace);
      const hasFingerprint = !!(info && info.hasFingerprint);
      const enrolled = hasFace || hasFingerprint;
      this.userEnrolledBiometric = enrolled;

      if (!enrolled) {
        // Option 1 default: If user has neither face nor finger enrolled -> password sign in
        this.authMethod = 'password';
      } else {
        if (hasFace && !hasFingerprint) {
          // Option 3: User has face enrolled
          this.authMethod = 'face';
          this.biometricMode = 'face';
        } else if (hasFingerprint && !hasFace) {
          // Option 2: User has fingerprint enrolled
          this.authMethod = 'fingerprint';
          this.biometricMode = 'fingerprint';
        } else if (hasFace && hasFingerprint) {
          // Both enrolled: keep current choice or default to fingerprint
          if (this.authMethod === 'password') {
            this.authMethod = 'fingerprint';
            this.biometricMode = 'fingerprint';
          }
        }
      }
    } catch {
      this.userEnrolledBiometric = null;
      this.userBiometricInfo = null;
    }
  }

  async onSignIn() {
    if (this.loading) return;

    // 1. Validate entered credentials
    if (!this.username.trim()) {
      this.toastService.show('Please enter your username.', 'error');
      return;
    }
    if (!this.password) {
      this.toastService.show('Please enter your password.', 'error');
      return;
    }

    // OPTION 1: Username & Password Sign In
    if (this.authMethod === 'password') {
      this.loginStandard();
      return;
    }

    // OPTION 2: Username, Password & Fingerprint Sign In
    if (this.authMethod === 'fingerprint') {
      if (!this.dpService.isConnected) {
        this.toastService.show('Fingerprint scanner not detected. Please connect your scanner or switch to another option.', 'error');
        await this.retryBiometricConnection();
        return;
      }
      this.biometricMode = 'fingerprint';
      this.isScanning = true;
      this.toastService.show('Please place your finger on the scanner to authenticate.', 'info');
      await this.dpService.startCapture();
      return;
    }

    // OPTION 3: Username, Password & Face Sign In
    if (this.authMethod === 'face') {
      this.biometricMode = 'face';
      this.toastService.show('Activating face recognition...', 'info');
      await this.startFaceScan();
      return;
    }
  }

  async startFaceScan() {
    this.faceVerified = false;
    this.isScanning = true;

    // Allow DOM to render video and canvas elements
    setTimeout(async () => {
      const videoEl = this.faceVideoRef?.nativeElement;
      const captureCanvas = this.captureCanvasRef?.nativeElement;
      const displayCanvas = this.displayCanvasRef?.nativeElement;

      if (!videoEl || !captureCanvas) {
        console.warn('Face video or canvas element not found in DOM');
        this.faceStatus = 'Camera elements not initialized';
        return;
      }

      await this.faceService.startCapture(videoEl, captureCanvas, displayCanvas);
    }, 100);
  }

  captureFaceSnapshot() {
    const videoEl = this.faceVideoRef?.nativeElement;
    const captureCanvas = this.captureCanvasRef?.nativeElement;
    if (!videoEl || !captureCanvas) return;
    this.faceService.captureSnapshot(videoEl, captureCanvas);
  }

  useMockFace() {
    // Generate synthetic face matching server-java-ant matcher
    const syntheticFace = this.createSyntheticFace();
    this.onSampleCaptured(syntheticFace, 'face');
  }

  async cancelScan() {
    if (!this.isScanning) return;
    this.isScanning = false;
    this.faceVerified = false;
    if (this.authMethod === 'fingerprint' || this.biometricMode === 'fingerprint') {
      await this.dpService.stopCapture();
      this.toastService.show('Fingerprint scan cancelled.', 'info');
    } else {
      this.faceService.stopCapture();
      this.toastService.show('Face scan cancelled.', 'info');
    }
  }

  async onScannerIconClick() {
    if (this.authMethod === 'fingerprint') {
      if (!this.dpService.isConnected) {
        await this.retryBiometricConnection();
        return;
      }
    }

    if (this.isScanning) {
      await this.cancelScan();
      return;
    }

    if (!this.username.trim() || !this.password) {
      this.toastService.show('Please enter your username and password, then click Sign In.', 'info');
      return;
    }

    await this.onSignIn();
  }

  /**
   * Handles captured biometric image from scanner or camera,
   * calling the relevant server-java-ant API (POST /api/auth/login-finger or POST /api/auth/login-face).
   */
  private onSampleCaptured(base64Image: string, type: 'fingerprint' | 'face') {
    this.isScanning = false;
    this.loading = true;
    this.lastCapturedLength = base64Image?.length || 0;
    if (type === 'face') {
      this.faceVerified = true;
    }

    if (typeof window !== 'undefined') {
      (window as any).__lastCapturedBiometric = base64Image;
      (window as any).__lastBiometricType = type;
      try {
        sessionStorage.setItem('__lastCapturedBiometric', base64Image);
        sessionStorage.setItem('__lastBiometricType', type);
      } catch (e) {}
    }

    console.log(
      `%c🔐 [server-java-ant Sign In] Submitting Username, Password, and ${type.toUpperCase()} Biometric`,
      'background: #10b981; color: white; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
    );
    console.log(`👤 Username:`, this.username);
    console.log(`🔑 Password:`, this.password ? '****** (' + this.password.length + ' chars)' : '(empty)');
    console.log(`🧬 Biometric Type:`, type);
    console.log(`📷 Base64 Image length:`, base64Image?.length, 'characters');

    const authObservable = type === 'face'
      ? this.authService.loginFace({
          username: this.username,
          password: this.password,
          face: base64Image
        })
      : this.authService.loginFinger({
          username: this.username,
          password: this.password,
          finger: base64Image
        });

    authObservable.subscribe({
      next: (res: any) => {
        this.toastService.show(res?.message || 'Authentication successful!', 'success');
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/']);
        }, 1000);
      },
      error: (err) => {
        this.loading = false;
        this.faceVerified = false;
        const errMsg = err.error?.message || (typeof err.error === 'string' ? err.error : null) || err.message || 'Authentication failed. Please try again.';
        this.toastService.show(errMsg, 'error');
      }
    });
  }

  /**
   * Option 1: Standard Username & Password login (POST /api/auth/login on server-java-ant)
   */
  private loginStandard() {
    this.loading = true;
    console.log(`🔑 [server-java-ant Sign In] Standard Credentials: User: ${this.username}`);
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Logged in successfully!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errPayload = err.error;
        // If server informs biometrics are required for this account
        if (errPayload && errPayload.requiresBiometric) {
          if (errPayload.hasFace && !errPayload.hasFingerprint) {
            this.setAuthMethod('face');
          } else if (errPayload.hasFingerprint && !errPayload.hasFace) {
            this.setAuthMethod('fingerprint');
          } else {
            this.setAuthMethod('fingerprint');
          }
          this.toastService.show(errPayload.message || 'Biometric verification required for this account. Please select Fingerprint or Face Scan.', 'error');
          return;
        }

        const errMsg = err.error?.message || err.message || 'Invalid username or password';
        this.toastService.show(errMsg, 'error');
      }
    });
  }

  /**
   * Creates a synthetic face Base64 PNG identical to server-java-ant BiometricApiTest
   */
  private createSyntheticFace(): string {
    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#404040';
      ctx.fillRect(0, 0, 160, 160);
      // Head oval
      ctx.fillStyle = '#d3d3d3';
      ctx.beginPath();
      ctx.ellipse(80, 80, 50, 60, 0, 0, Math.PI * 2);
      ctx.fill();
      // Eyes
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(59, 66, 9, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(101, 66, 9, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      // Nose
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(80, 75);
      ctx.lineTo(80, 100);
      ctx.stroke();
      // Mouth
      ctx.beginPath();
      ctx.arc(80, 105, 20, 0, Math.PI);
      ctx.stroke();
    }
    return canvas.toDataURL('image/png');
  }
}

