import { Component, inject, Output, EventEmitter, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { AuthService } from '../../../../services/auth.service';
import { ToastService } from '../../../../services/toast.service';
import { DigitalPersonaFaceService } from '../../../../services/digital-persona-face.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-face-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, ButtonComponent],
  templateUrl: './face-registration.component.html',
  styles: ``
})
export class FaceRegistrationComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  public faceService = inject(DigitalPersonaFaceService);

  @ViewChild('faceVideo') faceVideoRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('captureCanvas') captureCanvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('displayCanvas') displayCanvasRef?: ElementRef<HTMLCanvasElement>;

  loading = false;
  isScanning = false;
  faceVerified = false;
  password = '';
  showPassword = false;
  isMirrored = true;
  lastCapturedLength = 0;
  faceStatus = 'Ready';

  private statusSub?: Subscription;
  private sampleSub?: Subscription;

  ngOnInit() {
    this.statusSub = this.faceService.status$.subscribe(status => {
      this.faceStatus = status;
    });

    this.sampleSub = this.faceService.faceSample$.subscribe(base64Image => {
      if (this.isScanning && !this.loading) {
        this.onFaceCaptured(base64Image);
      }
    });
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private cleanup() {
    if (this.statusSub) this.statusSub.unsubscribe();
    if (this.sampleSub) this.sampleSub.unsubscribe();
    this.faceService.stopCapture();
  }

  onClose() {
    this.faceService.stopCapture();
    this.isScanning = false;
    this.faceVerified = false;
    this.password = '';
    this.loading = false;
    this.close.emit();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleMirror() {
    this.isMirrored = !this.isMirrored;
    const canvas = this.displayCanvasRef?.nativeElement;
    if (canvas) {
      canvas.style.transform = this.isMirrored ? 'scaleX(-1)' : 'none';
    }
  }

  async startScan() {
    if (!this.password.trim()) {
      this.toastService.show('Please enter your password to confirm registration.', 'error');
      return;
    }

    this.faceVerified = false;
    this.isScanning = true;
    this.faceStatus = 'Starting camera...';

    // Allow DOM to render video and canvas elements inside the modal
    setTimeout(async () => {
      const videoEl = this.faceVideoRef?.nativeElement;
      const captureCanvas = this.captureCanvasRef?.nativeElement;
      const displayCanvas = this.displayCanvasRef?.nativeElement;

      if (!videoEl || !captureCanvas) {
        console.warn('Face video or canvas element not found in DOM');
        this.faceStatus = 'Camera elements not ready';
        return;
      }

      await this.faceService.startCapture(videoEl, captureCanvas, displayCanvas);
    }, 100);
  }

  captureFaceSnapshot() {
    const videoEl = this.faceVideoRef?.nativeElement;
    const captureCanvas = this.captureCanvasRef?.nativeElement;
    if (!videoEl || !captureCanvas) return;
    const captured = this.faceService.captureSnapshot(videoEl, captureCanvas);
    if (captured && !this.loading) {
      this.onFaceCaptured(captured);
    }
  }

  useMockFace() {
    if (!this.password.trim()) {
      this.toastService.show('Please enter your password to confirm registration.', 'error');
      return;
    }
    const sample = this.faceService.generateMockFaceSample();
    if (sample && !this.loading) {
      this.onFaceCaptured(sample);
    }
  }

  private onFaceCaptured(base64Image: string) {
    if (this.loading) return;

    if (!base64Image || base64Image.length < 50) {
      this.toastService.show('Captured face image is empty or invalid. Please position your face and try again.', 'error');
      return;
    }

    if (!this.password.trim()) {
      this.toastService.show('Please enter your password to confirm registration.', 'error');
      return;
    }

    this.isScanning = false;
    this.faceVerified = true;
    this.loading = true;
    this.lastCapturedLength = base64Image?.length || 0;

    const user = this.authService.currentUserValue;
    if (!user) {
      this.toastService.show('You must be logged in to register biometrics.', 'error');
      this.loading = false;
      this.faceVerified = false;
      return;
    }

    const username = user.username || user.defaultUsername || user.name;
    const payload = {
      userId: user.id || user.uuid,
      username: username,
      password: this.password,
      base64Image: base64Image,
      biometricType: 'face'
    };

    console.log('👤 [Register Face] Submitting face template to server for username:', payload.username);

    this.authService.registerRawBiometric(payload).subscribe({
      next: (res: any) => {
        this.toastService.show(res?.message || 'Face biometric registered successfully!', 'success');
        setTimeout(() => {
          this.loading = false;
          this.onClose();
        }, 1200);
      },
      error: (err) => {
        this.loading = false;
        this.faceVerified = false;
        const msg = err.error?.message || err.message || 'Face registration failed. Please try again.';
        this.toastService.show(msg, 'error');
      }
    });
  }
}
