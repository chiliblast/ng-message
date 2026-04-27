import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, from, catchError, map } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private http = inject(HttpClient);
  private offlineStorage = inject(OfflineStorageService);
  private readonly apiUrl = 'http://localhost:3000/api/locations';

  bulkSave(locations: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk`, locations);
  }

  getLocations(page: number = 1, limit: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`).pipe(
      tap(res => {
        if (res && res.data) {
          this.offlineStorage.saveLocations(res.data);
        }
      }),
      catchError(() => {
        // Fallback to offline storage if server is down
        return from(this.offlineStorage.getLocations()).pipe(
          map(cached => {
            console.log('📡 Offline: Loaded locations from IndexedDB', cached.length);
            return {
              data: cached,
              pagination: {
                total: cached.length,
                page: 1,
                limit: cached.length,
                totalPages: 1
              }
            };
          })
        );
      })
    );
  }
}
