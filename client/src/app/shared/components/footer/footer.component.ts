import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
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
    .ticker-text {
      position: absolute;
      white-space: nowrap;
      left: 100%;
      will-change: transform;
    }
    .ticker-active {
      animation: ticker-slide 25s linear forwards;
    }
    @keyframes ticker-slide {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(calc(-100% - 100vw), 0, 0);
      }
    }
  `]
})
export class FooterComponent implements OnInit, OnDestroy {
  currentMessage = '';
  isAnimating = false;
  private newsSubscription: Subscription | undefined;
  private newsService = inject(NewsService);

  ngOnInit() {
    this.newsSubscription = this.newsService.getFlashNews().subscribe(msg => {
      this.currentMessage = msg;
      this.isAnimating = false;
      setTimeout(() => {
        this.isAnimating = true;
      }, 50);
    });
  }

  ngOnDestroy() {
    if (this.newsSubscription) {
      this.newsSubscription.unsubscribe();
    }
  }
}
