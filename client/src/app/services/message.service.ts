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
    {
      body: "All nodes update complete.",
      type: {
        color: "#FF472E",
        allowUser: 1,
        colorDark: "#FF472E",
        allowGroup: 1,
        messageType: "Alert",
        messageTypeId: 1,
        messageTypeName: "Alert",
        messageTypeShortName: "AL"
      },
      sentAt: "2026-06-09 14:30",
      subject: "Action Required",
      priority: 3,
      progress: null,
      timeline: null,
      expiresAt: null,
      messageId: 2,
      recipients: [{ recipientUserId: null, slectedGroupId: null, recipientGroupId: 33 }],
      messageUuid: "some-uuid-1",
      messageDetails: []
    },
    {
      body: "Please complete the assigned tasks.",
      type: {
        color: "#F59E0B",
        allowUser: 1,
        colorDark: "#F59E0B",
        allowGroup: 1,
        messageType: "Task Reminder",
        messageTypeId: 3,
        messageTypeName: "Task Reminder",
        messageTypeShortName: "TR"
      },
      sentAt: "2026-06-09 11:15",
      subject: "Reminder",
      priority: 2,
      progress: null,
      timeline: null,
      expiresAt: null,
      messageId: 3,
      recipients: [{ recipientUserId: null, slectedGroupId: null, recipientGroupId: 33 }],
      messageUuid: "some-uuid-2",
      messageDetails: []
    },
    {
      body: "Starting scheduled server maintenance.",
      type: {
        color: "#3B82F6",
        allowUser: 1,
        colorDark: "#3B82F6",
        allowGroup: 1,
        messageType: "System Update",
        messageTypeId: 2,
        messageTypeName: "System Update",
        messageTypeShortName: "SU"
      },
      sentAt: "2026-06-08 23:00",
      subject: "Maintenance",
      priority: 1,
      progress: null,
      timeline: null,
      expiresAt: null,
      messageId: 4,
      recipients: [{ recipientUserId: null, slectedGroupId: null, recipientGroupId: 33 }],
      messageUuid: "some-uuid-3",
      messageDetails: []
    },
    {
      body: "Critical patch required immediately.",
      type: {
        color: "#EF4444",
        allowUser: 1,
        colorDark: "#EF4444",
        allowGroup: 1,
        messageType: "Emergency Broadcast",
        messageTypeId: 5,
        messageTypeName: "Emergency Broadcast",
        messageTypeShortName: "EB"
      },
      sentAt: "2026-06-08 09:45",
      subject: "Urgent",
      priority: 5,
      progress: null,
      timeline: null,
      expiresAt: null,
      messageId: 5,
      recipients: [{ recipientUserId: null, slectedGroupId: null, recipientGroupId: 33 }],
      messageUuid: "some-uuid-4",
      messageDetails: []
    }
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

  getMessagesHistory(payload?: { uuid?: string; hierarchyNeeded?: number; messageTypeId?: number }) {
    const finalPayload = {
      uuid: payload?.uuid || '',
      hierarchyNeeded: payload?.hierarchyNeeded ?? 0,
      messageTypeId: payload?.messageTypeId ?? 0
    };
    return this.http.post<any[]>(`${this.apiUrl}/history`, finalPayload).pipe(
      tap(history => {
        this.historySubject.next(history);
      }),
      catchError(() => {
        // Fallback to local mockHistory matching messageTypeId if set
        const filtered = this.mockHistory.filter(item => 
          !finalPayload.messageTypeId || item.type?.messageTypeId === finalPayload.messageTypeId
        );
        this.historySubject.next(filtered);
        return of(filtered);
      })
    );
  }

  addMessageToHistory(type: any, text: string) {
    const current = this.historySubject.value;
    
    let typeObj = {
      color: "#6B7280",
      allowUser: 1,
      colorDark: "#6B7280",
      allowGroup: 1,
      messageType: "General",
      messageTypeId: 99,
      messageTypeName: "General",
      messageTypeShortName: "GN"
    };

    if (type && typeof type === 'object') {
      typeObj = {
        color: type.color || "#6B7280",
        allowUser: type.allowUser ?? 1,
        colorDark: type.colorDark || type.color || "#6B7280",
        allowGroup: type.allowGroup ?? 1,
        messageType: type.type || "General",
        messageTypeId: type.id || 99,
        messageTypeName: type.name || type.type || "General",
        messageTypeShortName: type.shortName || "GN"
      };
    } else if (typeof type === 'string') {
      typeObj.messageType = type;
      typeObj.messageTypeName = type;
    }

    const newMsg = {
      body: text,
      type: typeObj,
      sentAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      subject: "",
      priority: 1,
      progress: null,
      timeline: null,
      expiresAt: null,
      messageId: Date.now(),
      recipients: [],
      messageUuid: "",
      messageDetails: []
    };
    this.historySubject.next([newMsg, ...current]);
  }
}
