import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

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

  messageReceived$ = this.messageReceivedSubject.asObservable();
  messageSent$ = this.messageSentSubject.asObservable();
  globalFeedUpdate$ = this.globalFeedUpdateSubject.asObservable();
  connected$ = this.connectedSubject.asObservable();

  private userSub: Subscription;

  constructor() {
    // Watch for auth changes to manage connection lifecycle
    this.userSub = this.authService.user$.subscribe(user => {
      if (user) {
        this.connect(user.id);
      } else {
        this.disconnect();
      }
    });
  }

  private connect(userId: number) {
    if (this.socket?.connected) return;

    this.socket = io('http://localhost:3000');

    this.socket.on('connect', () => {
      this.connectedSubject.next(true);
      console.log(`🔌 Socket Connected. Registering user ${userId}...`);
      this.register(userId);
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
}
