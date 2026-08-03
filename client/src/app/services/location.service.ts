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

  private mockLocations = [
    {
      id: 1,
      target_number: "LOC-001",
      target_name: "Central Office",
      latitude: 40.7128,
      longitude: -74.0060,
      latitide_dms: "40° 42' 46.08\" N",
      lontitude_dms: "74° 0' 21.6\" W",
      altitude: 2,
      target_description: "123 Main St, New York, NY"
    },
    {
      id: 2,
      target_number: "LOC-002",
      target_name: "West Coast Hub",
      latitude: 34.0522,
      longitude: -118.2437,
      latitide_dms: "34° 3' 7.92\" N",
      lontitude_dms: "118° 14' 37.32\" W",
      altitude: 2,
      target_description: "456 Sunset Blvd, Los Angeles, CA"
    }
  ];

  decimalToDMS(decimal: number, isLatitude: boolean): string {
    if (isNaN(decimal) || decimal === null || decimal === undefined) return '';
    const direction = isLatitude 
      ? (decimal >= 0 ? 'N' : 'S') 
      : (decimal >= 0 ? 'E' : 'W');
    
    const absolute = Math.abs(decimal);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = parseFloat(((minutesNotTruncated - minutes) * 60).toFixed(2));

    return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
  }

  dmsToDecimal(dmsStr: string): number {
    if (!dmsStr) return 0;
    const cleanStr = dmsStr.trim().replace(/\s+/g, ' ');
    const regex = /(\d+)\s*°\s*(\d+)\s*'\s*([\d.]+)\s*"\s*([NSEWnsew])/;
    const match = cleanStr.match(regex);
    if (!match) {
      const parsedFloat = parseFloat(cleanStr);
      if (!isNaN(parsedFloat)) return parsedFloat;
      return 0;
    }

    const degrees = parseFloat(match[1]);
    const minutes = parseFloat(match[2]);
    const seconds = parseFloat(match[3]);
    const direction = match[4].toUpperCase();

    let decimal = degrees + (minutes / 60) + (seconds / 3600);
    if (direction === 'S' || direction === 'W') {
      decimal = -decimal;
    }
    return parseFloat(decimal.toFixed(6));
  }

  bulkSave(locations: any[]): Observable<any> {
    const insertUuids: string[] = [];
    locations.forEach((loc, index) => {
      // Keep coordinates in sync
      if ((loc.latitude === null || isNaN(loc.latitude)) && loc.latitide_dms) {
        loc.latitude = this.dmsToDecimal(loc.latitide_dms);
      } else if (loc.latitude !== null && !isNaN(loc.latitude) && !loc.latitide_dms) {
        loc.latitide_dms = this.decimalToDMS(loc.latitude, true);
      }

      if ((loc.longitude === null || isNaN(loc.longitude)) && loc.lontitude_dms) {
        loc.longitude = this.dmsToDecimal(loc.lontitude_dms);
      } else if (loc.longitude !== null && !isNaN(loc.longitude) && !loc.lontitude_dms) {
        loc.lontitude_dms = this.decimalToDMS(loc.longitude, false);
      }

      if (!loc.id) {
        loc.id = this.mockLocations.length > 0 
          ? Math.max(...this.mockLocations.map(l => l.id)) + 1 
          : 1;
      }
      
      loc.altitude = loc.altitude !== undefined && loc.altitude !== null ? Number(loc.altitude) : 2;
      this.mockLocations.push(loc);
      insertUuids.push(`uuid-mock-${loc.id}`);
    });

    return of({
      status: "information",
      message: `${locations.length} new locations saved successfully`,
      data: {
        insertUuids: insertUuids,
        validatinErrors: []
      }
    });
  }

  getLocations(page: number = 1, limit: number = 10): Observable<any> {
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = this.mockLocations.slice(start, end);
    return of({
      data: data,
      pagination: {
        total: this.mockLocations.length,
        page: page,
        limit: limit,
        totalPages: Math.ceil(this.mockLocations.length / limit)
      }
    });
  }

  addLocation(location: any): Observable<any> {
    if ((location.latitude === null || isNaN(location.latitude)) && location.latitide_dms) {
      location.latitude = this.dmsToDecimal(location.latitide_dms);
    } else if (location.latitude !== null && !isNaN(location.latitude) && !location.latitide_dms) {
      location.latitide_dms = this.decimalToDMS(location.latitude, true);
    }

    if ((location.longitude === null || isNaN(location.longitude)) && location.lontitude_dms) {
      location.longitude = this.dmsToDecimal(location.lontitude_dms);
    } else if (location.longitude !== null && !isNaN(location.longitude) && !location.lontitude_dms) {
      location.lontitude_dms = this.decimalToDMS(location.longitude, false);
    }

    location.id = this.mockLocations.length > 0 
      ? Math.max(...this.mockLocations.map(l => l.id)) + 1 
      : 1;
    location.altitude = location.altitude !== undefined && location.altitude !== null ? Number(location.altitude) : 2;
    this.mockLocations.push(location);
    return of({ success: true, message: 'Location added successfully' });
  }

  updateLocation(id: number, location: any): Observable<any> {
    if ((location.latitude === null || isNaN(location.latitude)) && location.latitide_dms) {
      location.latitude = this.dmsToDecimal(location.latitide_dms);
    } else if (location.latitude !== null && !isNaN(location.latitude) && !location.latitide_dms) {
      location.latitide_dms = this.decimalToDMS(location.latitude, true);
    }

    if ((location.longitude === null || isNaN(location.longitude)) && location.lontitude_dms) {
      location.longitude = this.dmsToDecimal(location.lontitude_dms);
    } else if (location.longitude !== null && !isNaN(location.longitude) && !location.lontitude_dms) {
      location.lontitude_dms = this.decimalToDMS(location.longitude, false);
    }

    const idx = this.mockLocations.findIndex(l => l.id === id);
    if (idx !== -1) {
      location.altitude = location.altitude !== undefined && location.altitude !== null ? Number(location.altitude) : 2;
      this.mockLocations[idx] = { ...location };
    }
    return of({ success: true, message: 'Location updated successfully' });
  }

  deleteLocation(id: number): Observable<any> {
    this.mockLocations = this.mockLocations.filter(l => l.id !== id);
    return of({ success: true, message: 'Location deleted successfully' });
  }
}
