import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();
  private counter = 0;

  show(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    const currentToasts = this.toastsSubject.value;
    // Prevent duplicate toast if an identical message is already visible
    if (currentToasts.some(t => t.message === message && t.type === type)) {
      return;
    }

    const id = this.counter++;
    const toast: Toast = { id, message, type };
    this.toastsSubject.next([...currentToasts, toast]);

    setTimeout(() => {
      this.remove(id);
    }, 5000);
  }

  remove(id: number) {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter(t => t.id !== id));
  }
}
