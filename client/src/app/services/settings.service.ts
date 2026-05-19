import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, of } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { environment } from '../../environments/environment';

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
  private apiUrl = `${environment.apiBaseUrl}/settings`;

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
    // TODO: Replace this mock response with your new API response when ready
    const actions: StatusAction[] = [
      { id: 1, label: "A", color: "#10b981", description: "Node is active and operational" },
      { id: 2, label: "B", color: "#f59e0b", description: "Node operation is pending" },
      { id: 3, label: "C", color: "#ef4444", description: "Node is suspended" },
      { id: 4, label: "D", color: "#10b981", description: "Node is active and operational" },
      
    ];
    this.statusActionsSubject.next(actions);
    return of(actions);

    /* -- Original implementation (uncomment to restore once new API is live) --
    return this.http.get<StatusAction[]>(`${this.apiUrl}/status-actions`).pipe(
      tap(actions => {
        this.statusActionsSubject.next(actions);
        this.offlineStorage.saveSettings('status_actions', actions);
      })
    );
    */
  }

  get currentStatusActions() {
    return this.statusActionsSubject.value;
  }
}
