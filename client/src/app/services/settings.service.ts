import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

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
  private apiUrl = 'http://localhost:3000/api/settings';

  private statusActionsSubject = new BehaviorSubject<StatusAction[]>([]);
  statusActions$ = this.statusActionsSubject.asObservable();

  loadStatusActions() {
    return this.http.get<StatusAction[]>(`${this.apiUrl}/status-actions`).pipe(
      tap(actions => this.statusActionsSubject.next(actions))
    );
  }

  get currentStatusActions() {
    return this.statusActionsSubject.value;
  }
}
