import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, from, catchError, map, of } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private http = inject(HttpClient);
  private offlineStorage = inject(OfflineStorageService);
  private readonly apiUrl = `${environment.apiBaseUrl}/locations`;

  bulkSave(locations: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk`, locations);
  }

  getLocations(page: number = 1, limit: number = 10): Observable<any> {
    // TODO: Replace this mock response with your new API response when ready
    return of({
      data: [
        {
          id: 1,
          name: "Central Office",
          latitude: 40.7128,
          longitude: -74.0060,
          address: "123 Main St, New York, NY"
        },
        {
          id: 2,
          name: "West Coast Hub",
          latitude: 34.0522,
          longitude: -118.2437,
          address: "456 Sunset Blvd, Los Angeles, CA"
        }
      ],
      pagination: {
        total: 2,
        page: page,
        limit: limit,
        totalPages: 1
      }
    });

    /* -- Original implementation (uncomment to restore once new API is live) --
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
    */
  }

  addLocation(location: any): Observable<any> {
    return this.http.post(this.apiUrl, location);
  }

  updateLocation(id: number, location: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, location);
  }

  deleteLocation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
