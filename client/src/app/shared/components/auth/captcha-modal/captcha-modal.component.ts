import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-captcha-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, ButtonComponent],
  templateUrl: './captcha-modal.component.html',
  styles: ``
})
export class CaptchaModalComponent implements AfterViewInit, OnChanges {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('captchaCanvas') canvasRef?: ElementRef<HTMLCanvasElement>;

  private toastService = inject(ToastService);

  captchaMode: 'text' | 'math' = 'text';
  captchaText = '';
  captchaAnswer = '';
  userInput = '';
  status: 'idle' | 'valid' | 'invalid' = 'idle';
  statusMessage = '';
  verificationToken = '';
  attemptsLeft = 3;
  isRotating = false;

  // Characters excluding visually ambiguous glyphs (0, O, o, 1, I, l)
  private charPool = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';

  ngAfterViewInit() {
    if (this.isOpen) {
      setTimeout(() => this.generateCaptcha(), 50);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.status = 'idle';
      this.statusMessage = '';
      this.userInput = '';
      this.verificationToken = '';
      this.attemptsLeft = 3;
      setTimeout(() => this.generateCaptcha(), 60);
    }
  }

  setMode(mode: 'text' | 'math') {
    if (this.captchaMode === mode) return;
    this.captchaMode = mode;
    this.generateCaptcha();
  }

  generateCaptcha() {
    if (this.captchaMode === 'text') {
      let result = '';
      for (let i = 0; i < 6; i++) {
        result += this.charPool.charAt(Math.floor(Math.random() * this.charPool.length));
      }
      this.captchaText = result;
      this.captchaAnswer = result;
    } else {
      const ops = ['+', '-', '×'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      let num1: number, num2: number, ans: number;
      if (op === '+') {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        ans = num1 + num2;
      } else if (op === '-') {
        num1 = Math.floor(Math.random() * 20) + 10;
        num2 = Math.floor(Math.random() * 9) + 1;
        ans = num1 - num2;
      } else {
        num1 = Math.floor(Math.random() * 9) + 2;
        num2 = Math.floor(Math.random() * 9) + 2;
        ans = num1 * num2;
      }
      this.captchaText = `${num1} ${op} ${num2} = ?`;
      this.captchaAnswer = ans.toString();
    }

    this.userInput = '';
    this.status = 'idle';
    this.statusMessage = '';
    this.verificationToken = '';
    this.drawCanvas();
  }

  drawCanvas() {
    if (!this.canvasRef?.nativeElement) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Detect theme from class
    const isDark = document.documentElement.classList.contains('dark');

    // 1. Background gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    if (isDark) {
      grad.addColorStop(0, '#1e293b');
      grad.addColorStop(1, '#0f172a');
    } else {
      grad.addColorStop(0, '#f8fafc');
      grad.addColorStop(1, '#e2e8f0');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 2. Background interference bezier lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = isDark
        ? `rgba(148, 163, 184, ${0.15 + Math.random() * 0.2})`
        : `rgba(100, 116, 139, ${0.2 + Math.random() * 0.25})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width, Math.random() * height,
        Math.random() * width, Math.random() * height,
        Math.random() * width, Math.random() * height
      );
      ctx.stroke();
    }

    // 3. Random noise dots
    for (let i = 0; i < 45; i++) {
      ctx.fillStyle = isDark
        ? `rgba(203, 213, 225, ${Math.random() * 0.4})`
        : `rgba(71, 85, 105, ${Math.random() * 0.4})`;
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Render Characters with individual rotation, random font, 3D shadow
    const text = this.captchaText;
    const textLength = text.length;
    const charSpacing = (width - 50) / textLength;

    const fonts = ['Arial', 'Verdana', 'Trebuchet MS', 'Georgia', 'Courier New'];
    const colors = isDark
      ? ['#60a5fa', '#38bdf8', '#a78bfa', '#34d399', '#f472b6', '#fb923c']
      : ['#2563eb', '#0284c7', '#7c3aed', '#059669', '#db2777', '#d97706'];

    for (let i = 0; i < textLength; i++) {
      const char = text[i];
      const fontName = fonts[Math.floor(Math.random() * fonts.length)];
      const fontSize = Math.floor(Math.random() * 8) + 26; // 26px - 34px
      ctx.font = `bold ${fontSize}px "${fontName}", sans-serif`;
      ctx.fillStyle = colors[i % colors.length];

      // Subtle shadow for depth
      ctx.shadowColor = isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.2)';
      ctx.shadowOffsetX = 1.5;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 3;

      const angle = (Math.random() - 0.5) * 0.45; // -13 deg to +13 deg
      const x = 30 + i * charSpacing;
      const y = height / 2 + (Math.random() - 0.5) * 8 + 8;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // 5. Anti-bot wave stroke through the characters
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(0, 0, 0, 0.22)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(10, height / 2 + Math.sin(0) * 12);
    for (let x = 10; x < width - 10; x += 10) {
      ctx.lineTo(x, height / 2 + Math.sin(x * 0.04) * 10);
    }
    ctx.stroke();
  }

  refreshCaptcha() {
    this.isRotating = true;
    setTimeout(() => this.isRotating = false, 500);
    this.attemptsLeft = 3;
    this.generateCaptcha();
  }

  playAudio() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.toastService.show('Audio speech synthesis is not supported on this browser.', 'error');
      return;
    }

    let utteranceText = '';
    if (this.captchaMode === 'text') {
      utteranceText = this.captchaText.split('').join(' ');
    } else {
      utteranceText = this.captchaText.replace('×', 'times').replace('=', 'equals');
    }

    const utterance = new SpeechSynthesisUtterance(utteranceText);
    utterance.rate = 0.75;
    utterance.pitch = 1.0;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    this.toastService.show('Playing audio challenge...', 'info');
  }

  verify() {
    const trimmed = this.userInput.trim();
    if (!trimmed) {
      this.status = 'invalid';
      this.statusMessage = 'Please enter the CAPTCHA code.';
      return;
    }

    const isCorrect = this.captchaMode === 'text'
      ? trimmed.toLowerCase() === this.captchaAnswer.toLowerCase()
      : trimmed === this.captchaAnswer;

    if (isCorrect) {
      this.status = 'valid';
      this.statusMessage = 'Verification Successful! You are confirmed human.';
      
      // Generate offline token
      const tokenBytes = new Uint8Array(16);
      window.crypto.getRandomValues(tokenBytes);
      this.verificationToken = 'CAPTCHA_' + Array.from(tokenBytes).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
      this.toastService.show('CAPTCHA verification passed!', 'success');
    } else {
      this.attemptsLeft--;
      this.status = 'invalid';
      if (this.attemptsLeft <= 0) {
        this.statusMessage = 'Maximum attempts reached. Generating new challenge.';
        this.toastService.show('Maximum attempts reached. New CAPTCHA generated.', 'error');
        this.refreshCaptcha();
      } else {
        this.statusMessage = `Incorrect answer. ${this.attemptsLeft} attempt(s) remaining.`;
        this.toastService.show('Incorrect CAPTCHA answer. Please try again.', 'error');
      }
    }
  }

  onClose() {
    this.close.emit();
  }
}
