import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfflineStorageService } from './offline-storage.service';
import { SocketService } from './socket.service';
import { BehaviorSubject, fromEvent, merge, of, Subject, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
    
    if (pending.length === 0) {
      this.syncPendingLocations(); // Try syncing locations even if no messages
      return;
    }

    console.log(`🔄 Syncing ${pending.length} pending messages...`);

    for (const msg of pending) {
      try {
        console.log(`📤 Sending pending message: ${msg.localId}...`);
        await firstValueFrom(this.http.post(`${environment.apiBaseUrl}/messages/send`, {
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
    
    this.syncPendingLocations();
    this.syncCompletedSubject.next();
  }

  async syncPendingLocations() {
    const pending = await this.storage.getPendingLocations();
    if (pending.length === 0) return;

    console.log(`🌍 Found ${pending.length} pending location batches to sync...`);

    for (const batch of pending) {
      try {
        console.log(`📤 Syncing location batch: ${batch.localId}...`);
        await firstValueFrom(this.http.post(`${environment.apiBaseUrl}/locations/bulk`, batch.data));
        
        // Remove from IndexedDB after successful sync
        const tx = (this.storage as any).db.transaction('pendingLocations', 'readwrite');
        const store = tx.objectStore('pendingLocations');
        store.delete(batch.localId);
        
        console.log(`✅ Location batch synced: ${batch.localId}`);
      } catch (error) {
        console.error(`❌ Location sync failed for batch ${batch.localId}:`, error);
        break;
      }
    }
    this.syncCompletedSubject.next();
  }

  get isOnline(): boolean {
    return this.onlineStatusSubject.value;
  }
}
