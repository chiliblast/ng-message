import { Injectable, inject, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, of, from, catchError, map, Subject, timestamp } from 'rxjs';
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

  private blinkingNodesSubject = new BehaviorSubject<Set<any>>(new Set());
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

  sendMessage(receiverId: any, messageText: string, recipient: string, messageTypeId?: number, subject?: string, isGroup?: boolean ) {
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const expiresStr = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().replace('T', ' ').substring(0, 19);
    const currentUser = this.authService.currentUserValue;

    const payload = [
      {
        id: 1,
        messageTypeId: messageTypeId,
        messagStatusId: 1,
        senderUserUuid: currentUser?.uuid ,
        subject: "",
        body: messageText ,
        priority: 1,
        timeline: nowStr,
        expiresAt: expiresStr,
        ackRequired: 0,
        allowGroup: 0,
        allowUser: 1,
        initiatedByUuid: currentUser?.uuid ,
        createdByUuid: currentUser?.uuid,
        sentAt: nowStr,
        parentMessageId: null,
        toUserUuid: String(receiverId) ,
        toUserGroupUuid: "23323-2323",
        infoContent: "some info",
        tickerContent: "Ticker info",
        tickerExpiresAt: expiresStr,
        details: []
      }
    ];

    if (!this.sync.isOnline) {
      this.toastService.show('Offline: Message queued for later sync', 'warning');
      this.socketService.simulateMessageSent(receiverId, messageText);
      return from(this.storage.addPendingMessage(payload[0])).pipe(
        map(() => ({ success: true, status: 'pending' }))
      );
    }

    return this.http.post(`${this.apiUrl}/send-message`, payload).pipe(
      map(() => ({
        status: "success",
        message: "Message Inserted Successfully",
        data: {
          firtMessageId: 8,
          lastMessageId: 120,
          messageDetails: null
        },
        timestamp: "2025-06-12T07:32:12.180Z"
      })),
      tap(() => {
        this.socketService.simulateMessageSent(receiverId, messageText);
      }),
      catchError(() => {
        this.storage.addPendingMessage(payload[0]);
        this.socketService.simulateMessageSent(receiverId, messageText);
        return of({
          status: "success",
          message: "Message Inserted Successfully",
          data: {
            firtMessageId: 8,
            lastMessageId: 120,
            messageDetails: null
          },
          timestamp: "2025-06-12T07:32:12.180Z"
        });
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

  addBlinkingNode(nodeId: any) {
    const current = this.blinkingNodesSubject.value;
    current.add(nodeId);
    this.blinkingNodesSubject.next(new Set(current));
    setTimeout(() => this.removeBlinkingNode(nodeId), 3000);
  }

  removeBlinkingNode(nodeId: any) {
    const current = this.blinkingNodesSubject.value;
    current.delete(nodeId);
    this.blinkingNodesSubject.next(new Set(current));
  }

  isNodeBlinking(nodeId: any): boolean {
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
      { id: 1, type: "Alert", name: "All nodes update complete.", shortName: "AL", color: "#FF472E", colorDark: "#FF472E", displayOrder: 0, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:12:12", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 2, type: "System Update", name: "Version 2.1.0 has been deployed.", shortName: "SU", color: "#3B82F6", colorDark: "#3B82F6", displayOrder: 1, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:15:22", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 3, type: "Task Reminder", name: "Please complete daily safety checks.", shortName: "TR", color: "#F59E0B", colorDark: "#F59E0B", displayOrder: 2, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:20:00", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 4, type: "General Notice", name: "Weekly sync scheduled for Thursday.", shortName: "GN", color: "#10B981", colorDark: "#10B981", displayOrder: 3, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:25:30", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 5, type: "Emergency Broadcast", name: "Critical system outage reported.", shortName: "EB", color: "#EF4444", colorDark: "#EF4444", displayOrder: 4, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:30:10", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 6, type: "Informational", name: "Standard operating procedures updated.", shortName: "IN", color: "#6B7280", colorDark: "#6B7280", displayOrder: 5, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:35:45", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 7, type: "Security Alert", name: "Unauthorized login attempt detected.", shortName: "SA", color: "#8B5CF6", colorDark: "#8B5CF6", displayOrder: 6, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:40:00", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null },
      { id: 8, type: "Maintenance Notice", name: "Scheduled server downtime this Saturday.", shortName: "MN", color: "#EC4899", colorDark: "#EC4899", displayOrder: 7, showInLegend: 1, allowGroup: 1, allowUser: 1, userAccess: 0, createdBy: 1, createdAt: "2025-06-11 00:45:00", updatedBy: 0, updatedAt: null, deletedBy: 0, deletedAt: null }
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
