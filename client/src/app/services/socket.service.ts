import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private messageReceivedSubject = new Subject<any>();
  private messageSentSubject = new Subject<any>();
  private globalFeedUpdateSubject = new Subject<any>();
  private connectedSubject = new BehaviorSubject<boolean>(false);

  messageReceived$ = this.messageReceivedSubject.asObservable();
  messageSent$ = this.messageSentSubject.asObservable();
  globalFeedUpdate$ = this.globalFeedUpdateSubject.asObservable();
  connected$ = this.connectedSubject.asObservable();

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('connect', () => {
      this.connectedSubject.next(true);
      
      // Re-register if we have a stored user ID
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        this.register(userData.id);
        console.log(`📡 Auto-registering user ${userData.id} after connection...`);
      }
    });

    this.socket.on('disconnect', () => {
      this.connectedSubject.next(false);
    });

    this.socket.on('new_message', (data) => {
      this.messageReceivedSubject.next(data);
    });

    this.socket.on('message_sent', (data) => {
      this.messageSentSubject.next(data);
    });

    this.socket.on('global_feed_update', (data) => {
      console.log('📡 Global feed update received:', data);
      this.globalFeedUpdateSubject.next(data);
    });
  }

  register(userId: number) {
    this.socket.emit('register', userId);
  }

  onNewMessage(): Observable<any> {
    return this.messageReceived$;
  }

  onMessageSent(): Observable<any> {
    return this.messageSent$;
  }
}
