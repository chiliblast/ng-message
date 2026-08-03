import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public readonly hardcodedMessages = [
    "SYSTEM ALERT: Routine maintenance scheduled for 02:00 AM UTC.",
    "UPDATE: Dynamic grid layout optimizations have been successfully deployed.",
    "INFO: New location data imported successfully into the registry.",
    "ANNOUNCEMENT: University board meeting scheduled for tomorrow.",
    "NOTICE: Please sync your offline data when returning to a stable connection."
  ];

  getFlashNews(): Observable<string> {
    // Cycle messages sequentially in a loop every 25 seconds locally
    return timer(0, 25000).pipe(
      map((tick) => {
        const index = tick % this.hardcodedMessages.length;
        return "FLASH: " + this.hardcodedMessages[index].toUpperCase();
      })
    );
  }
}
