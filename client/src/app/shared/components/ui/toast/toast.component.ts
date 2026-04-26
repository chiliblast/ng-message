import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-5 right-5 z-[999999] flex flex-col gap-3 pointer-events-none">
      @for (toast of toasts; track toast.id) {
        <div [ngClass]="{
          'bg-emerald-600': toast.type === 'success',
          'bg-rose-600': toast.type === 'error',
          'bg-amber-600': toast.type === 'warning',
          'bg-blue-600': toast.type === 'info'
        }" class="min-w-[320px] pointer-events-auto p-4 rounded-2xl shadow-2xl text-white flex items-center justify-between animate-slide-in border border-white/20">
          <div class="flex items-center gap-3">
            @if (toast.type === 'error') {
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            } @else if (toast.type === 'success') {
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
            <span class="text-sm font-bold">{{ toast.message }}</span>
          </div>
          <button (click)="toastService.remove(toast.id)" class="ml-4 hover:scale-110 transition-transform">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    @keyframes slide-in {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .animate-slide-in {
      animation: slide-in 0.3s ease-out forwards;
    }
  `]
})
export class ToastComponent implements OnInit {
  public toastService = inject(ToastService);
  toasts: any[] = [];

  ngOnInit() {
    this.toastService.toasts$.subscribe(toasts => {
      console.log('Toasts updated:', toasts);
      this.toasts = toasts;
    });
  }
}
