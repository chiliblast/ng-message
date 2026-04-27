import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';

export interface StatusAction {
  id: number;
  label: string;
  color: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private http = inject(HttpClient);
  private offlineStorage = inject(OfflineStorageService);
  private apiUrl = 'http://localhost:3000/api/settings';

  private statusActionsSubject = new BehaviorSubject<StatusAction[]>([]);
  statusActions$ = this.statusActionsSubject.asObservable();

  constructor() {
    this.initOfflineActions();
  }

  private async initOfflineActions() {
    const cached = await this.offlineStorage.getSettings('status_actions');
    if (cached) {
      this.statusActionsSubject.next(cached);
    }
  }

  loadStatusActions() {
    return this.http.get<StatusAction[]>(`${this.apiUrl}/status-actions`).pipe(
      tap(actions => {
        this.statusActionsSubject.next(actions);
        this.offlineStorage.saveSettings('status_actions', actions);
      })
    );
  }

  get currentStatusActions() {
    return this.statusActionsSubject.value;
  }
}
