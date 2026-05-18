import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/ui/modal/modal.component';
import Peer from 'peerjs';
import { AuthService } from '../../../../services/auth.service';
import { SocketService } from '../../../../services/socket.service';

@Component({
  selector: 'app-java-video-call-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './video-call-modal.component.html' // Reusing the same template
})
export class JavaVideoCallModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isOpen = false;
  @Input() node: any = null;
  @Input() isIncoming = false;
  @Output() close = new EventEmitter<void>();

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  private authService = inject(AuthService);
  private socketService = inject(SocketService);
  
  private peer: Peer | null = null;
  private localStream: MediaStream | null = null;
  private currentCall: any = null;
  
  isVideoEnabled = true;
  isMuted = false;
  isCallActive = false;

  ngOnInit() {
    this.initPeer();
    this.setupSocketListeners();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      console.log('📽️ JavaVideoCallModal: Modal opened', { isIncoming: this.isIncoming, node: this.node });
      
      if (!this.isIncoming && this.node) {
        console.log('📞 Initiating outgoing call to:', this.node.id);
        this.startLocalStream(); 
        this.initiateCall();
      } else if (this.isIncoming) {
        console.log('🔔 Modal opened for incoming call from:', this.node?.id);
      }
    } else if (changes['isOpen'] && !changes['isOpen'].currentValue) {
      this.cleanupCall();
    }
  }

  async startLocalStream() {
    try {
      console.log('📹 Requesting local media stream...');
      this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      console.log('✅ Local stream obtained');
      if (this.localVideo) this.localVideo.nativeElement.srcObject = this.localStream;
    } catch (err) {
      console.error('❌ Failed to get local stream:', err);
    }
  }

  private initPeer() {
    const user = (this.authService as any).userSubject.value;
    if (!user) return;

    // TODO: Update this URL to point to your Java local server
    // For example, if your Java server runs on port 8080:
    const javaServerUrl = 'http://localhost:8080'; 
    const url = new URL(javaServerUrl);
    
    console.log(`Initializing PeerJS with Java server: ${javaServerUrl}`);
    
    this.peer = new Peer(`user-${user.id}`, {
      host: url.hostname,
      port: parseInt(url.port) || (url.protocol === 'https:' ? 443 : 80),
      path: '/peerjs', // Update this path if the Java server uses a different path
      secure: url.protocol === 'https:'
    });

    this.peer.on('call', (call) => {
      this.currentCall = call;
      this.answerCall();
    });

    this.peer.on('error', (err) => {
      console.error('PeerJS error (Java server):', err);
    });
  }

  private setupSocketListeners() {
    this.socketService.callAccepted$.subscribe(() => {
      console.log('Call accepted by remote user');
      this.startCall();
    });

    this.socketService.callRejected$.subscribe(() => {
      console.log('Call rejected');
      this.endCall();
    });

    this.socketService.callEnded$.subscribe(() => {
      console.log('Call ended by remote user');
      this.cleanupCall();
      this.close.emit();
    });
  }

  acceptCall() {
    console.log('✅ User clicked Accept');
    this.socketService.emit('accept_call', {
      to: this.node.id,
      from: (this.authService as any).userSubject.value.id
    });
  }

  rejectCall() {
    console.log('❌ User clicked Decline');
    this.socketService.emit('reject_call', {
      to: this.node.id,
      from: (this.authService as any).userSubject.value.id
    });
    this.endCall();
  }

  private initiateCall() {
    const user = (this.authService as any).userSubject.value;
    this.socketService.emit('initiate_call', {
      to: this.node.id,
      from: user.id,
      callerName: user.name
    });
  }

  async answerCall() {
    try {
      console.log('☎️ Answering call...');
      if (!this.localStream) await this.startLocalStream();
      
      this.currentCall.answer(this.localStream);
      this.currentCall.on('stream', (remoteStream: MediaStream) => {
        console.log('📡 Remote stream received (Answer)');
        if (this.remoteVideo) this.remoteVideo.nativeElement.srcObject = remoteStream;
        this.isCallActive = true;
      });
    } catch (err) {
      console.error('Failed to answer call:', err);
    }
  }

  async startCall() {
    try {
      console.log('📲 Starting WebRTC call via PeerJS to Java server...');
      if (!this.localStream) await this.startLocalStream();

      const call = this.peer!.call(`user-${this.node.id}`, this.localStream!);
      this.currentCall = call;
      
      call.on('stream', (remoteStream: MediaStream) => {
        console.log('📡 Remote stream received (Caller)');
        if (this.remoteVideo) this.remoteVideo.nativeElement.srcObject = remoteStream;
        this.isCallActive = true;
      });
    } catch (err) {
      console.error('Failed to start PeerJS call:', err);
    }
  }

  toggleVideo() {
    if (this.localStream) {
      this.isVideoEnabled = !this.isVideoEnabled;
      this.localStream.getVideoTracks().forEach(track => track.enabled = this.isVideoEnabled);
    }
  }

  toggleAudio() {
    if (this.localStream) {
      this.isMuted = !this.isMuted;
      this.localStream.getAudioTracks().forEach(track => track.enabled = !this.isMuted);
    }
  }

  endCall() {
    this.socketService.emit('end_call', { to: this.node?.id });
    this.cleanupCall();
    this.close.emit();
  }

  private cleanupCall() {
    if (this.currentCall) this.currentCall.close();
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }
    this.isCallActive = false;
  }

  ngOnDestroy() {
    this.cleanupCall();
    if (this.peer) this.peer.destroy();
  }
}
