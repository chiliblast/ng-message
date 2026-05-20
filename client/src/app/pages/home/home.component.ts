import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian/accordian.component';
import { inject, OnInit } from '@angular/core';
import { HierarchyService } from '../../services/hierarchy.service';
import { SettingsService } from '../../services/settings.service';
import { AuthService } from '../../services/auth.service';
import { SocketService } from '../../services/socket.service';
import { MessageService } from '../../services/message.service';
import { SearchService } from '../../services/search.service';

import { MapModalComponent } from './modals/map-modal/map-modal.component';
import { VideoCallModalComponent } from './modals/video-call-modal/video-call-modal.component';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    AccordianComponent, 
    MapModalComponent,
    VideoCallModalComponent,
    MessageModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private hierarchyService = inject(HierarchyService);
  private settingsService = inject(SettingsService);
  private authService = inject(AuthService);
  private socketService = inject(SocketService);
  private messageService = inject(MessageService);
  private searchService = inject(SearchService);

  mockRes: any[] = [];
  currentUser: any = null;
  searchQuery: string = '';
  selectedNode: any = null;
  profileNode: any = null;
  callNode: any = null;
  messageNode: any = null;
  showProfileModal: boolean = false;
  showCallModal: boolean = false;
  showMessageModal: boolean = false;
  isIncomingCall: boolean = false;
  selectedActionIdForModal: any = null;

  ngOnInit() {
    this.settingsService.loadStatusActions().subscribe();
    this.hierarchyService.getHierarchy().subscribe({
      next: (data) => {
        this.mockRes = data;
        
        const user = this.authService.currentUserValue;
        if (user) {console.log(user)
          this.currentUser = {
            groupId: user.id || 1000,
            groupUuid: user.uuid,
            groupName: user.username,
            displayName: user.displayName,
            shortName: user.shortName,
            userType: user.role,
            fname: user.displayName,
            progress: 100,
            depthFromStart: 0,
            isOpen: true,
            actions: [{ id: 1, name: 'Active', color: '#10b981', label: 'A' }],
            children: this.mockRes
          };
        }

        const currentOnline = this.socketService.initialPresenceSubject.value;
        if (currentOnline.length > 0) {
          if (this.currentUser) this.applyInitialPresence(this.currentUser, currentOnline);
        }
      },
      error: (err) => console.error('Error fetching hierarchy:', err)
    });

    this.socketService.initialPresence$.subscribe(onlineIds => {
      if (onlineIds.length > 0) {
        if (this.currentUser) this.applyInitialPresence(this.currentUser, onlineIds);
      }
    });

    this.socketService.presenceUpdate$.subscribe(data => {
      if (this.currentUser) {
        this.updatePresence(this.currentUser, data.userId, data.status === 'online');
      }
    });

    this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });

    this.socketService.incomingCall$.subscribe(data => {
      console.log('🔔 Incoming call signal received in HomeComponent:', data);
      this.callNode = { groupId: data.from, displayName: data.callerName, fname: data.callerName };
      this.isIncomingCall = true;
      this.showCallModal = true;
    });
  }

  private applyInitialPresence(node: any, onlineIds: number[]) {
    if (node) {
      node.isOnline = onlineIds.includes(node.groupId);
      if (node.children) {
        node.children.forEach((child: any) => this.applyInitialPresence(child, onlineIds));
      }
    }
  }

  private updatePresence(node: any, userId: number, isOnline: boolean) {
    if (node) {
      if (node.groupId === userId) {
        node.isOnline = isOnline;
        return true;
      }
      if (node.children) {
        for (const child of node.children) {
          if (this.updatePresence(child, userId, isOnline)) return true;
        }
      }
    }
    return false;
  }

  onSelectNode(data: any) {
    this.selectedNode = data.node;
  }

  onOpenProfile(node: any) {
    this.profileNode = {
      ...node,
      id: node.groupId,
      uuid: node.groupUuid,
      name: node.displayName || node.groupName,
      title: node.displayName || node.groupName,
      details: node.displayName + (node.shortName ? ` (${node.shortName})` : '') + ` - ${node.userType || 'USER'}`
    };
    this.showProfileModal = true;
  }

  closeProfile() {
    this.showProfileModal = false;
    this.profileNode = null;
  }

  onOpenCall(node: any) {
    this.callNode = {
      ...node,
      id: node.groupId,
      uuid: node.groupUuid,
      name: node.displayName || node.groupName,
      title: node.displayName || node.groupName,
      details: node.displayName + (node.shortName ? ` (${node.shortName})` : '') + ` - ${node.userType || 'USER'}`
    };
    this.showCallModal = true;
  }

  closeCall() {
    this.showCallModal = false;
    this.callNode = null;
    this.isIncomingCall = false;
  }

  onOpenMessage(event: any) {
    const node = event.node ? event.node : event;
    const actionId = event.actionId ? event.actionId : null;

    this.messageNode = {
      ...node,
      id: node.groupId,
      uuid: node.groupUuid,
      name: node.displayName || node.groupName,
      title: node.displayName || node.groupName,
      details: node.displayName + (node.shortName ? ` (${node.shortName})` : '') + ` - ${node.userType || 'USER'}`
    };
    this.selectedActionIdForModal = actionId;
    this.showMessageModal = true;
  }

  closeMessage() {
    this.showMessageModal = false;
    this.messageNode = null;
  }

  isNodeMatched(node: any): boolean {
    if (!this.searchQuery) return false;
    const query = this.searchQuery.toLowerCase();
    return node.displayName?.toLowerCase().includes(query) || 
           node.groupName?.toLowerCase().includes(query) ||
           node.fname?.toLowerCase().includes(query) ||
           node.shortName?.toLowerCase().includes(query);
  }

  getNodeColor(depth: any): string {
    const numericDepth = Number(depth);
    switch (numericDepth) {
      case 0: return 'brand';
      case 1: return 'blue';
      case 2: return 'success';
      case 3: return 'warning';
      case 4: return 'purple';
      case 5: return 'indigo';
      default: return 'brand';
    }
  }

  closePopover() {
    this.selectedNode = null;
  }
}
