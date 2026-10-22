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

  get currentUsername(): string {
    const user = this.authService.currentUserValue;
    return user ? (user.username || user.defaultUsername || user.name || '') : '';
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

    const username = this.currentUsername;
    if (!username) {
      this.toastService.show('You must be logged in to register biometrics.', 'error');
      return;
    }

    this.isScanning = false;
    this.faceVerified = true;
    this.loading = true;
    this.lastCapturedLength = base64Image?.length || 0;

    const payload = {
      username: username,
      password: this.password.trim(),
      face: base64Image
    };

    console.log('👤 [server-java-ant Face Registration] Submitting face template for:', payload.username);

    this.authService.registerFace(payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastService.show(res?.message || 'Face biometric registered successfully on server-java-ant!', 'success');
        setTimeout(() => {
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
