import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, from } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';

@Injectable({ providedIn: 'root' })
export class HierarchyService {
  private http = inject(HttpClient);
  private storage = inject(OfflineStorageService);
  private apiUrl = 'http://localhost:3000/api/hierarchy';

  getHierarchy(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(data => this.storage.saveHierarchy(data)),
      catchError(() => from(this.storage.getHierarchy()))
    );
  }
}
