import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfflineStorageService } from './offline-storage.service';
import { SocketService } from './socket.service';
import { BehaviorSubject, fromEvent, merge, of, Subject, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfflineSyncService {
  private http = inject(HttpClient);
  private storage = inject(OfflineStorageService);
  private socketService = inject(SocketService);
  
  private onlineStatusSubject = new BehaviorSubject<boolean>(navigator.onLine);
  private syncCompletedSubject = new Subject<void>();
  
  onlineStatus$ = this.onlineStatusSubject.asObservable();
  syncCompleted$ = this.syncCompletedSubject.asObservable();

  constructor() {
    this.initNetworkMonitoring();
    
    // Primary sync trigger: When the socket connects to the central server
    this.socketService.connected$.subscribe(connected => {
      console.log('🔌 Socket Connection Status:', connected ? 'CONNECTED' : 'DISCONNECTED');
      if (connected) {
        console.log('🚀 Delaying Sync for 1s to allow all clients to re-register...');
        setTimeout(() => {
          console.log('🚀 Starting Sync...');
          this.syncPendingMessages();
        }, 1000);
      }
    });
  }

  private initNetworkMonitoring() {
    merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ).subscribe(status => {
      console.log('🌐 Network Status Changed:', status ? 'ONLINE' : 'OFFLINE');
      this.onlineStatusSubject.next(status);
      if (status) {
        console.log('🚀 Triggering Sync...');
        this.syncPendingMessages();
      }
    });
  }

  async syncPendingMessages() {
    const pending = await this.storage.getPendingMessages();
    console.log(`📦 Pending messages found in storage: ${pending.length}`);
    
    if (pending.length === 0) return;

    console.log(`🔄 Syncing ${pending.length} pending messages...`);

    for (const msg of pending) {
      try {
        console.log(`📤 Sending pending message: ${msg.localId}...`);
        await firstValueFrom(this.http.post('http://localhost:3000/api/messages/send', {
          receiverId: msg.receiverId,
          actionId: msg.actionId,
          messageText: msg.messageText
        }));
        
        await this.storage.removePendingMessage(msg.localId);
        console.log(`✅ Message synced and removed from local storage: ${msg.localId}`);
      } catch (error) {
        console.error(`❌ Sync failed for message ${msg.localId}:`, error);
        break;
      }
    }
    
    this.syncCompletedSubject.next();
  }

  get isOnline(): boolean {
    return this.onlineStatusSubject.value;
  }
}
