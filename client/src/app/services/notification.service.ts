import { Injectable, inject } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private swPush = inject(SwPush);
  private http = inject(HttpClient);
  
  // Replace this with your generated VAPID Public Key
  private readonly VAPID_PUBLIC_KEY = 'BPYQf6puTYX1gK63RlrXmZO5Iayj0pHtmio8gsMqhuyyBmetLXZFJAegoDioOtvVS91AXgEzKkjDO0VeiBPiVbs';

  async subscribeToNotifications() {
    if (!this.swPush.isEnabled) {
      console.log('Notifications are not enabled or supported.');
      return;
    }

    try {
      const sub = await this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      });

      console.log('Successfully subscribed to notifications:', sub);
      
      // Send subscription to backend
      await firstValueFrom(this.http.post(`${environment.apiBaseUrl}/notifications/subscribe`, sub));
      
    } catch (err) {
      console.error('Could not subscribe to notifications', err);
    }
  }

  listenForNotifications() {
    this.swPush.messages.subscribe(msg => {
      console.log('Received push message:', msg);
    });

    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      console.log('Notification clicked:', action, notification);
      window.focus();
    });
  }
}
