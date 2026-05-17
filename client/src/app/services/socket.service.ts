import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | null = null;
  private authService = inject(AuthService);
  
  private messageReceivedSubject = new Subject<any>();
  private messageSentSubject = new Subject<any>();
  private globalFeedUpdateSubject = new Subject<any>();
  private connectedSubject = new BehaviorSubject<boolean>(false);
  private incomingCallSubject = new Subject<any>();
  private callAcceptedSubject = new Subject<any>();
  private callRejectedSubject = new Subject<any>();
  private callEndedSubject = new Subject<void>();
  
  public initialPresenceSubject = new BehaviorSubject<number[]>([]);
  public presenceUpdateSubject = new Subject<{ userId: number, status: 'online' | 'offline' }>();

  messageReceived$ = this.messageReceivedSubject.asObservable();
  messageSent$ = this.messageSentSubject.asObservable();
  globalFeedUpdate$ = this.globalFeedUpdateSubject.asObservable();
  connected$ = this.connectedSubject.asObservable();
  incomingCall$ = this.incomingCallSubject.asObservable();
  callAccepted$ = this.callAcceptedSubject.asObservable();
  callRejected$ = this.callRejectedSubject.asObservable();
  callEnded$ = this.callEndedSubject.asObservable();
  initialPresence$ = this.initialPresenceSubject.asObservable();
  presenceUpdate$ = this.presenceUpdateSubject.asObservable();

  private userSub: Subscription;

  constructor() {
    // Connect immediately to check server status
    this.connect();

    // Watch for auth changes to register user
    this.userSub = this.authService.user$.subscribe(user => {
      if (user && this.socket?.connected) {
        this.register(user.id);
      }
    });
  }

  private connect() {
    if (this.socket?.connected) return;

    this.socket = io(environment.socketUrl);

    this.socket.on('connect', () => {
      this.connectedSubject.next(true);
      console.log(`🔌 Socket Connected.`);
      
      const user = this.authService.currentUserValue;
      if (user) {
        console.log(`Registering user ${user.id}...`);
        this.register(user.id);
      }
    });

    this.socket.on('disconnect', () => {
      this.connectedSubject.next(false);
      console.log('🔌 Socket Disconnected.');
    });

    this.socket.on('new_message', (data) => this.messageReceivedSubject.next(data));
    this.socket.on('message_sent', (data) => this.messageSentSubject.next(data));
    this.socket.on('global_feed_update', (data) => {
      console.log('📡 Global feed update received:', data);
      this.globalFeedUpdateSubject.next(data);
    });

    this.socket.on('incoming_call', (data) => this.incomingCallSubject.next(data));
    this.socket.on('call_accepted', (data) => this.callAcceptedSubject.next(data));
    this.socket.on('call_rejected', (data) => this.callRejectedSubject.next(data));
    this.socket.on('call_ended', () => this.callEndedSubject.next());
    this.socket.on('initial_presence', (onlineIds: number[]) => this.initialPresenceSubject.next(onlineIds));
    this.socket.on('presence_update', (data: { userId: number, status: 'online' | 'offline' }) => this.presenceUpdateSubject.next(data));
  }

  private disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connectedSubject.next(false);
    }
  }

  private register(userId: number) {
    this.socket?.emit('register', userId);
  }

  onNewMessage(): Observable<any> {
    return this.messageReceived$;
  }

  onMessageSent(): Observable<any> {
    return this.messageSent$;
  }

  emit(event: string, data: any) {
    this.socket?.emit(event, data);
  }
}
