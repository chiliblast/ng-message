import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/locations';

  bulkSave(locations: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk`, locations);
  }

  getLocations(page: number = 1, limit: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }
}
