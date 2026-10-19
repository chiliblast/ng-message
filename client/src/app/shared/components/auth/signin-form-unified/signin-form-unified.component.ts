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

  showPassword = false;
  loading = false;
  isScanning = false;

  username = '';
  password = '';
  
  // Biometric requirement flag
  requireBiometric = true;

  // Biometric enrollment state: null (not checked), false (not enrolled), true (enrolled)
  userEnrolledBiometric: boolean | null = null;
  userBiometricInfo: { hasFace: boolean; hasFingerprint: boolean; requiresBiometric: boolean } | null = null;

  // Selected biometric modality: 'fingerprint' or 'face'
  biometricMode: 'fingerprint' | 'face' = 'fingerprint';
  faceStatus = 'Ready';
  isMirrored = true;
  faceVerified = false;
  lastCapturedLength = 0;

  private sampleSub?: Subscription;
  private connectSub?: Subscription;
  private faceSampleSub?: Subscription;
  private faceStatusSub?: Subscription;

  ngOnInit() {
    // Check initial scanner status
    this.dpService.checkConnection();

    // Listen for device connection changes
    this.connectSub = this.dpService.isConnected$.subscribe(connected => {
      if (!connected && this.isScanning && this.biometricMode === 'fingerprint') {
        this.isScanning = false;
        this.dpService.stopCapture();
        this.toastService.show('Biometric device was disconnected during scan.', 'error');
      }
    });

    // Listen for captured fingerprint sample
    this.sampleSub = this.dpService.sample$.subscribe(base64Image => {
      if (this.isScanning && this.biometricMode === 'fingerprint') {
        this.onSampleCaptured(base64Image, 'fingerprint');
      }
    });

    // Listen for captured face sample
    this.faceSampleSub = this.faceService.faceSample$.subscribe(base64Image => {
      if (this.isScanning && this.biometricMode === 'face') {
        this.onSampleCaptured(base64Image, 'face');
      }
    });

    // Listen for face scan status updates
    this.faceStatusSub = this.faceService.status$.subscribe(status => {
      this.faceStatus = status;
    });
  }

  ngOnDestroy() {
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

  setBiometricMode(mode: 'fingerprint' | 'face') {
    if (this.biometricMode === mode) return;
    if (this.isScanning) {
      this.cancelScan();
    }
    this.biometricMode = mode;
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
      const enrolled = !!(info && (info.hasFace || info.hasFingerprint));
      this.userEnrolledBiometric = enrolled;

      if (enrolled) {
        if (info.hasFace && !info.hasFingerprint) {
          this.biometricMode = 'face';
        } else if (info.hasFingerprint && !info.hasFace) {
          this.biometricMode = 'fingerprint';
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

    this.loading = true;

    // 2. Fetch biometric enrollment status from Java backend
    try {
      const info = await firstValueFrom(this.authService.getUserBiometrics(this.username.trim()));
      this.userBiometricInfo = info;
      const hasFace = !!(info && info.hasFace);
      const hasFingerprint = !!(info && info.hasFingerprint);
      this.userEnrolledBiometric = hasFace || hasFingerprint;

      // RULE 1: If user has neither face nor finger enrolled -> Sign in with username and password!
      if (!hasFace && !hasFingerprint) {
        console.log(`ℹ️ User '${this.username}' has not enrolled face or finger. Signing in with credentials.`);
        this.loginStandard();
        return;
      }

      this.loading = false;

      // RULE 2: If user has enrolled face only -> User MUST provide face scan
      if (hasFace && !hasFingerprint) {
        this.biometricMode = 'face';
        this.toastService.show('Face recognition required for this account.', 'info');
        await this.startFaceScan();
        return;
      }

      // RULE 3: If user has enrolled finger only -> User MUST provide finger scan
      if (hasFingerprint && !hasFace) {
        this.biometricMode = 'fingerprint';
        if (!this.dpService.isConnected) {
          this.toastService.show('Fingerprint scanner required for this enrolled account. Please connect your scanner.', 'error');
          return;
        }
        this.isScanning = true;
        this.toastService.show('Please place your enrolled finger on the scanner to authenticate.', 'info');
        await this.dpService.startCapture();
        return;
      }

      // RULE 4: If user has enrolled BOTH -> User may sign in by ONE of them (finger or face)!
      if (hasFace && hasFingerprint) {
        if (this.biometricMode === 'face') {
          this.toastService.show('Authenticating with Face Scan.', 'info');
          await this.startFaceScan();
        } else {
          if (!this.dpService.isConnected) {
            this.toastService.show('Fingerprint scanner not detected. You can switch to Face Scan or connect your scanner.', 'info');
            return;
          }
          this.isScanning = true;
          this.toastService.show('Please place your finger on the scanner to authenticate.', 'info');
          await this.dpService.startCapture();
        }
      }
    } catch (err: any) {
      // If user biometrics check failed (e.g. invalid username), call loginStandard so Java server returns proper error
      this.loginStandard();
    }
  }

  async startFaceScan() {
    this.faceVerified = false;
    this.isScanning = true;
    this.toastService.show('Starting camera for face recognition...', 'info');

    // Allow DOM to render the video and canvas elements
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
    this.faceService.generateMockFaceSample();
  }

  async cancelScan() {
    if (!this.isScanning) return;
    this.isScanning = false;
    this.faceVerified = false;
    if (this.biometricMode === 'fingerprint') {
      await this.dpService.stopCapture();
      this.toastService.show('Fingerprint scan cancelled.', 'info');
    } else {
      this.faceService.stopCapture();
      this.toastService.show('Face scan cancelled.', 'info');
    }
  }

  async onScannerIconClick() {
    if (this.biometricMode === 'fingerprint') {
      if (!this.dpService.isConnected) {
        await this.retryBiometricConnection();
        return;
      }
    }

    if (this.isScanning) {
      await this.cancelScan();
      return;
    }

    // If scanner/camera is ready, prompt user
    if (!this.username.trim() || !this.password) {
      this.toastService.show('Please enter your username and password, then click Sign in.', 'info');
      return;
    }

    await this.onSignIn();
  }

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
      `%c🔐 [Unified Sign In] Submitting Username, Password, and ${type.toUpperCase()} Biometric to Server`,
      'background: #2563eb; color: white; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
    );
    console.log(`👤 Username:`, this.username);
    console.log(`🔑 Password:`, this.password ? '****** (' + this.password.length + ' chars)' : '(empty)');
    console.log(`🧬 Biometric Type:`, type);
    console.log(`📷 Base64 Image length:`, base64Image?.length, 'characters');
    console.log(`📷 Base64 Image (Full Data URL):`, base64Image);
    console.log(`💡 Tip: You can access this full string in console anytime by typing: __lastCapturedBiometric`);

    const payload = {
      username: this.username,
      password: this.password,
      base64Image: base64Image,
      biometricType: type
    };

    // Send all three to server for single-step authentication
    this.authService.loginWithBiometric(payload).subscribe({
      next: (res: any) => {
        this.toastService.show(res?.message || 'Authentication successful!', 'success');
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/']);
        }, 1200);
      },
      error: (err) => {
        this.loading = false;
        this.faceVerified = false;
        const errMsg = err.error?.message || (typeof err.error === 'string' ? err.error : null) || err.message || 'Authentication failed. Please try again.';
        this.toastService.show(errMsg, 'error');
      }
    });
  }

  private loginStandard() {
    this.loading = true;
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Logged in successfully!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errMsg = err.error?.message || err.message || 'Invalid username or password';
        this.toastService.show(errMsg, 'error');
      }
    });
  }
}
