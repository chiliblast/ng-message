import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

declare global {
  interface Window {
    faceSDK?: any;
    facefinder?: any;
  }
}

export interface FaceScanState {
  code: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DigitalPersonaFaceService {
  private activeSdkInstance: any = null;
  private currentStream: MediaStream | null = null;

  private statusSubject = new BehaviorSubject<string>('Ready');
  public status$ = this.statusSubject.asObservable();

  private isScanningSubject = new BehaviorSubject<boolean>(false);
  public isScanning$ = this.isScanningSubject.asObservable();

  private faceSampleSubject = new Subject<string>();
  public faceSample$ = this.faceSampleSubject.asObservable();

  public get isScanning(): boolean {
    return this.isScanningSubject.value;
  }

  /**
   * Check if camera / mediaDevices is supported offline by the browser
   */
  public isCameraSupported(): boolean {
    return typeof navigator !== 'undefined' && !!navigator.mediaDevices && !!navigator.mediaDevices.getUserMedia;
  }

  /**
   * Start Face scanning using DigitalPersona Face SDK (offline Pico cascade)
   */
  public async startCapture(
    videoElement: HTMLVideoElement,
    captureCanvas: HTMLCanvasElement,
    displayCanvas?: HTMLCanvasElement,
    imageCount: number = 1
  ): Promise<boolean> {
    this.stopCapture();

    if (!this.isCameraSupported()) {
      this.statusSubject.next('Camera not supported in this browser environment');
      return false;
    }

    // Listen for actual camera video stream resolution and adjust canvas dimensions
    const adjustCanvasToVideo = () => {
      const vw = videoElement.videoWidth;
      const vh = videoElement.videoHeight;
      if (vw > 0 && vh > 0) {
        console.log(`📷 [DigitalPersona Face] Camera resolution detected: ${vw}x${vh}`);
        const maxDim = 480;
        const s = Math.min(1, maxDim / Math.max(vw, vh));
        const targetW = Math.round(vw * s);
        const targetH = Math.round(vh * s);
        captureCanvas.width = targetW;
        captureCanvas.height = targetH;
        if (displayCanvas) {
          displayCanvas.width = targetW;
          displayCanvas.height = targetH;
        }
      }
    };

    videoElement.addEventListener('loadedmetadata', adjustCanvasToVideo);
    videoElement.addEventListener('play', adjustCanvasToVideo);

    // Initial default fallback dimensions
    if (!captureCanvas.width) captureCanvas.width = 480;
    if (!captureCanvas.height) captureCanvas.height = 360;
    if (displayCanvas) {
      if (!displayCanvas.width) displayCanvas.width = 480;
      if (!displayCanvas.height) displayCanvas.height = 360;
    }

    this.isScanningSubject.next(true);
    this.statusSubject.next('Initializing Face Scanner...');

    const FaceSDK = window.faceSDK;
    if (FaceSDK && typeof FaceSDK.init === 'function') {
      try {
        const options: any = {
          detection: {
            cascade: window.facefinder
          },
          capture: {
            minFaceSize: 80,
            maxFaceSize: 340,
            minDetectionInterval: 300
          },
          visuals: {
            mirror: true,
            backdrop: {
              color: 'transparent',
              opacityDelta: 0,
              maxOpacity: 0
            },
            frame: {
              goodFaceColor: '#10b981',
              badFaceColor: '#ef4444',
              progressColor: '#0ea5e9'
            }
          }
        };

        this.activeSdkInstance = FaceSDK.init(
          videoElement,
          {
            video: {
              facingMode: 'user',
              width: { ideal: 1280, min: 640 },
              height: { ideal: 720, min: 480 }
            }
          },
          captureCanvas,
          displayCanvas,
          imageCount,
          // Success callback
          (images: string[]) => {
            console.log('👤 [DigitalPersona Face] Face successfully detected and captured:', images?.length);
            let capturedImage = images && images.length > 0 ? images[0] : '';
            if (!capturedImage) {
              const ctx = captureCanvas.getContext('2d');
              if (ctx && videoElement.videoWidth) {
                ctx.drawImage(videoElement, 0, 0, captureCanvas.width, captureCanvas.height);
              }
              capturedImage = captureCanvas.toDataURL('image/jpeg', 0.9);
            }
            this.statusSubject.next('Face verified! Authenticating...');

            if (typeof window !== 'undefined') {
              (window as any).__lastCapturedFace = capturedImage;
            }

            console.log(
              '%c👤 [DigitalPersona Face] Biometric Face Sample Captured!',
              'background: #10b981; color: white; font-size: 13px; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
            );
            console.log('📷 Base64 length:', capturedImage.length, 'characters');
            console.log('📷 Base64 Image (Full Data URL):', capturedImage);
            console.log('💡 Tip: Type __lastCapturedFace in DevTools console to access the string.');

            setTimeout(() => {
              this.isScanningSubject.next(false);
              this.stopCapture();
              this.faceSampleSubject.next(capturedImage);
            }, 800);
          },
          // Error callback
          (error: any) => {
            console.error('👤 [DigitalPersona Face] SDK Error:', error);
            const msg = error?.message || 'Camera or detection error occurred';
            this.statusSubject.next(msg);
            // Fallback: If FaceSDK failed to start camera, try native getUserMedia
            if (!this.currentStream) {
              this.fallbackNativeCamera(videoElement, captureCanvas, displayCanvas);
            }
          },
          // Progress callback
          (state: FaceScanState) => {
            if (state && state.message) {
              this.statusSubject.next(state.message);
            }
          },
          options
        );

        return true;
      } catch (sdkError: any) {
        console.warn('👤 [DigitalPersona Face] SDK init failed, falling back to native webcam:', sdkError);
        return this.fallbackNativeCamera(videoElement, captureCanvas, displayCanvas);
      }
    } else {
      console.warn('👤 [DigitalPersona Face] window.faceSDK not found. Falling back to native offline HTML5 camera.');
      return this.fallbackNativeCamera(videoElement, captureCanvas, displayCanvas);
    }
  }

  /**
   * Fallback native camera stream if FaceSDK has difficulty initializing
   */
  private async fallbackNativeCamera(
    videoElement: HTMLVideoElement,
    captureCanvas: HTMLCanvasElement,
    displayCanvas?: HTMLCanvasElement
  ): Promise<boolean> {
    try {
      this.statusSubject.next('Opening camera stream...');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
      });
      this.currentStream = stream;
      videoElement.srcObject = stream;
      await videoElement.play().catch(() => {});
      this.statusSubject.next('Align face within the frame and click Capture');
      return true;
    } catch (err: any) {
      console.error('👤 [DigitalPersona Face] Native getUserMedia failed:', err);
      this.statusSubject.next(err?.message || 'Unable to access camera');
      this.isScanningSubject.next(false);
      return false;
    }
  }

  /**
   * Manual snapshot trigger from current video feed (e.g. if user wants instant capture)
   */
  public captureSnapshot(videoElement: HTMLVideoElement, captureCanvas: HTMLCanvasElement): string | null {
    try {
      if (!videoElement || !captureCanvas) return null;
      const width = videoElement.videoWidth || captureCanvas.width || 400;
      const height = videoElement.videoHeight || captureCanvas.height || 300;
      captureCanvas.width = width;
      captureCanvas.height = height;

      const ctx = captureCanvas.getContext('2d');
      if (!ctx) return null;

      ctx.drawImage(videoElement, 0, 0, width, height);
      const base64 = captureCanvas.toDataURL('image/jpeg', 0.9);
      
      this.statusSubject.next('Snapshot captured!');
      this.isScanningSubject.next(false);
      this.stopCapture();
      this.faceSampleSubject.next(base64);
      return base64;
    } catch (e) {
      console.error('Error capturing snapshot:', e);
      return null;
    }
  }

  /**
   * Generate an offline mock face sample image (for testing without a physical webcam)
   */
  public generateMockFaceSample(): string {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Draw background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 320, 320);

      // Biometric grid
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = 0; x < 320; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 320);
        ctx.stroke();
      }
      for (let y = 0; y < 320; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(320, y);
        ctx.stroke();
      }

      // Head silhouette
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(160, 130, 60, 0, Math.PI * 2);
      ctx.fill();

      // Shoulders
      ctx.beginPath();
      ctx.ellipse(160, 260, 95, 60, 0, 0, Math.PI, true);
      ctx.fill();

      // Targeting reticle overlay
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(160, 140, 90, 0, Math.PI * 2);
      ctx.stroke();

      // Text label
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('DIGITALPERSONA FACE MOCK', 160, 290);
    }

    const mockBase64 = canvas.toDataURL('image/jpeg', 0.9);
    this.faceSampleSubject.next(mockBase64);
    return mockBase64;
  }

  /**
   * Stop video stream and cleanup SDK resources
   */
  public stopCapture(): void {
    this.isScanningSubject.next(false);
    this.statusSubject.next('Scanner stopped');

    if (this.activeSdkInstance) {
      try {
        if (typeof this.activeSdkInstance.stopVideo === 'function') {
          this.activeSdkInstance.stopVideo();
        }
      } catch (e) {}
      this.activeSdkInstance = null;
    }

    if (window.faceSDK && typeof window.faceSDK.stopVideo === 'function') {
      try {
        window.faceSDK.stopVideo();
      } catch (e) {}
    }

    if (this.currentStream) {
      try {
        this.currentStream.getTracks().forEach(track => track.stop());
      } catch (e) {}
      this.currentStream = null;
    }
  }

  /**
   * Toggle or set mirror view at runtime
   */
  public setMirror(mirrored: boolean): void {
    if (this.activeSdkInstance && this.activeSdkInstance.options && this.activeSdkInstance.options.visuals) {
      this.activeSdkInstance.options.visuals.mirror = mirrored;
    }
  }
}


