import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getFlashNews(): Observable<string> {
    const hardcodedMessages = [
      "SYSTEM ALERT: Routine maintenance scheduled for 02:00 AM UTC.",
      "UPDATE: Dynamic grid layout optimizations have been successfully deployed.",
      "INFO: New location data imported successfully into the registry.",
      "ANNOUNCEMENT: University board meeting scheduled for tomorrow.",
      "NOTICE: Please sync your offline data when returning to a stable connection."
    ];

    // Cycle a random message every 15 seconds locally
    return timer(0, 15000).pipe(
      map(() => {
        const randomIndex = Math.floor(Math.random() * hardcodedMessages.length);
        return "FLASH: " + hardcodedMessages[randomIndex].toUpperCase();
      })
    );
  }
}
