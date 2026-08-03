import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styles: [`
    .ticker-container {
      position: relative;
      flex: 1;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
    }
    .marquee-track {
      display: flex;
      align-items: center;
      width: max-content;
      will-change: transform;
    }
  `]
})
export class FooterComponent implements OnInit, OnDestroy {
  allMessages: string[] = [];
  private newsService = inject(NewsService);

  currentPercent = 0;
  targetPercent = 0;
  isPaused = false;
  private animationId: number | null = null;

  ngOnInit() {
    this.allMessages = this.newsService.hardcodedMessages.map(msg => "FLASH: " + msg.toUpperCase());
    this.startAnimation();
  }

  ngOnDestroy() {
    this.stopAnimation();
  }

  private startAnimation() {
    const tick = () => {
      // 1. Marquee movement (if not paused)
      if (!this.isPaused) {
        this.targetPercent -= 0.012; // marquee speed (reduced for slower scroll)
      }

      // 2. Smooth interpolation of currentPercent towards targetPercent (slide effect)
      const diff = this.targetPercent - this.currentPercent;
      if (Math.abs(diff) > 0.001) {
        this.currentPercent += diff * 0.08; // Adjust easing speed (lower = slower/smoother)
      } else {
        this.currentPercent = this.targetPercent;
      }

      // 3. Wrap-around boundaries for seamless loop
      if (this.targetPercent <= -50) {
        this.targetPercent += 50;
        this.currentPercent += 50;
      }
      if (this.targetPercent > 0) {
        this.targetPercent -= 50;
        this.currentPercent -= 50;
      }

      this.animationId = requestAnimationFrame(tick);
    };
    this.animationId = requestAnimationFrame(tick);
  }

  private stopAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  prevMessage() {
    this.targetPercent += 6.5; // Larger step for visible slide effect
  }

  nextMessage() {
    this.targetPercent -= 6.5; // Larger step for visible slide effect
  }
}
