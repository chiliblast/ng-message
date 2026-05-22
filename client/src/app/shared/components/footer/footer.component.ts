import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  message$: Observable<string> | undefined;
  private newsService = inject(NewsService);

  ngOnInit() {
    this.message$ = this.newsService.getFlashNews();
  }
}
