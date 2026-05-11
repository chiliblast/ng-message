import { Injectable, inject, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, of, from, catchError, map } from 'rxjs';
import { SocketService } from './socket.service';
import { ToastService } from './toast.service';
import { OfflineStorageService } from './offline-storage.service';
import { OfflineSyncService } from './offline-sync.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private http = inject(HttpClient);
  private socketService = inject(SocketService);
  private toastService = inject(ToastService);
  private ngZone = inject(NgZone);
  private storage = inject(OfflineStorageService);
  private sync = inject(OfflineSyncService);
  
  private apiUrl = `${environment.apiBaseUrl}/messages`;

  private blinkingNodesSubject = new BehaviorSubject<Set<number>>(new Set());
  blinkingNodes$ = this.blinkingNodesSubject.asObservable();

  constructor() {
    this.socketService.onNewMessage().subscribe(msg => {
      this.ngZone.run(() => {
        this.addBlinkingNode(msg.receiverId);
        this.toastService.show(`New message received!`, 'success');
      });
    });

    this.socketService.onMessageSent().subscribe(msg => {
      this.ngZone.run(() => {
        this.addBlinkingNode(msg.receiverId);
      });
    });

    this.socketService.globalFeedUpdate$.subscribe(msg => {
      this.ngZone.run(() => {
        // Blink the receiver's node for everyone (Global Activity Visualization)
        this.addBlinkingNode(msg.receiverId);

        // Only show toast if user is a bystander (neither sender nor receiver)
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        const currentUserId = Number(currentUser.id);
        
        if (currentUserId !== Number(msg.senderId) && currentUserId !== Number(msg.receiverId)) {
          this.toastService.show(`New message detected`, 'info');
        }
      });
    });
  }

  sendMessage(receiverId: number, actionId: number, messageText: string, extraData: { recipient: string, label: string, labelColor: string }) {
    const enrichedMessage = {
      receiverId,
      actionId,
      messageText,
      recipient: extraData.recipient,
      snippet: messageText,
      label: extraData.label,
      labelColor: extraData.labelColor,
      time: new Date().toISOString(),
      status: 'pending'
    };

    if (!this.sync.isOnline) {
      this.toastService.show('Offline: Message queued for later sync', 'warning');
      return from(this.storage.addPendingMessage(enrichedMessage)).pipe(
        map(() => ({ success: true, status: 'pending' }))
      );
    }

    return this.http.post(`${this.apiUrl}/send`, { receiverId, actionId, messageText }).pipe(
      catchError(() => {
        this.storage.addPendingMessage(enrichedMessage);
        return of({ success: true, status: 'pending' });
      })
    );
  }

  getReceivedMessages() {
    return this.http.get<any[]>(`${this.apiUrl}/received`).pipe(
      tap(msgs => this.storage.saveMessages(msgs, 'received')),
      catchError(() => from(this.storage.getMessages('received')))
    );
  }

  getSentMessages() {
    return this.http.get<any[]>(`${this.apiUrl}/sent`).pipe(
      tap(msgs => this.storage.saveMessages(msgs, 'sent')),
      catchError(() => from(this.storage.getMessages('sent')))
    );
  }

  getAllOtherMessages() {
    return this.http.get<any[]>(`${this.apiUrl}/all-other`).pipe(
      tap(msgs => this.storage.saveMessages(msgs, 'all')),
      catchError(() => from(this.storage.getMessages('all')))
    );
  }

  addBlinkingNode(nodeId: number) {
    const current = this.blinkingNodesSubject.value;
    current.add(nodeId);
    this.blinkingNodesSubject.next(new Set(current));
    setTimeout(() => this.removeBlinkingNode(nodeId), 5000);
  }

  removeBlinkingNode(nodeId: number) {
    const current = this.blinkingNodesSubject.value;
    current.delete(nodeId);
    this.blinkingNodesSubject.next(new Set(current));
  }

  isNodeBlinking(nodeId: number): boolean {
    return this.blinkingNodesSubject.value.has(nodeId);
  }
}
