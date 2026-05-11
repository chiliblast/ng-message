import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, from } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HierarchyService {
  private http = inject(HttpClient);
  private storage = inject(OfflineStorageService);
  private apiUrl = `${environment.apiBaseUrl}/hierarchy`;

  getHierarchy(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(data => this.storage.saveHierarchy(data)),
      catchError(() => from(this.storage.getHierarchy()))
    );
  }
}
