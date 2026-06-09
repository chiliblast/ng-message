import { Injectable, inject, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, of, from, catchError, map } from 'rxjs';
import { SocketService } from './socket.service';
import { AuthService } from './auth.service';
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
  private authService = inject(AuthService);
  
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
        const currentUser = this.authService.currentUserValue;
        const currentUserId = currentUser ? Number(currentUser.id) : null;
        
        if (currentUserId && currentUserId !== Number(msg.senderId) && currentUserId !== Number(msg.receiverId)) {
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
      this.socketService.simulateMessageSent(receiverId, messageText);
      return from(this.storage.addPendingMessage(enrichedMessage)).pipe(
        map(() => ({ success: true, status: 'pending' }))
      );
    }

    return this.http.post(`${this.apiUrl}/send`, { receiverId, actionId, messageText }).pipe(
      tap(() => {
        this.socketService.simulateMessageSent(receiverId, messageText);
      }),
      catchError(() => {
        this.storage.addPendingMessage(enrichedMessage);
        this.socketService.simulateMessageSent(receiverId, messageText);
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
    setTimeout(() => this.removeBlinkingNode(nodeId), 3000);
  }

  removeBlinkingNode(nodeId: number) {
    const current = this.blinkingNodesSubject.value;
    current.delete(nodeId);
    this.blinkingNodesSubject.next(new Set(current));
  }

  isNodeBlinking(nodeId: number): boolean {
    return this.blinkingNodesSubject.value.has(nodeId);
  }

  // Mock API and History Stream
  private mockHistory = [
    { id: 1, type: 'Alert', text: 'All nodes update complete.', time: '2026-06-09 14:30', status: 'Delivered' },
    { id: 2, type: 'Task Reminder', text: 'Please complete the assigned tasks.', time: '2026-06-09 11:15', status: 'Delivered' },
    { id: 3, type: 'System Update', text: 'Starting scheduled server maintenance.', time: '2026-06-08 23:00', status: 'Seen' },
    { id: 4, type: 'Emergency Broadcast', text: 'Critical patch required immediately.', time: '2026-06-08 09:45', status: 'Delivered' }
  ];
  private historySubject = new BehaviorSubject<any[]>(this.mockHistory);
  history$ = this.historySubject.asObservable();

  getMessageTypes() {
    const mockTypes = [
      { id: 'alert', label: 'Alert' },
      { id: 'update', label: 'System Update' },
      { id: 'reminder', label: 'Task Reminder' },
      { id: 'notice', label: 'General Notice' },
      { id: 'emergency', label: 'Emergency Broadcast' },
      { id: 'info', label: 'Informational' }
    ];
    return of(mockTypes);
  }

  getSentMessagesHistory() {
    return this.history$;
  }

  addMessageToHistory(type: string, text: string) {
    const current = this.historySubject.value;
    const newMsg = {
      id: Date.now(),
      type,
      text,
      time: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Sent'
    };
    this.historySubject.next([newMsg, ...current]);
  }
}
