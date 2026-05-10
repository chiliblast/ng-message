import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian/accordian.component';
import { inject, OnInit } from '@angular/core';
import { HierarchyService } from '../../services/hierarchy.service';
import { SettingsService } from '../../services/settings.service';
import { AuthService } from '../../services/auth.service';
import { SocketService } from '../../services/socket.service';
import { MessageService } from '../../services/message.service';

import { MapModalComponent } from './modals/map-modal/map-modal.component';
import { VideoCallModalComponent } from './modals/video-call-modal/video-call-modal.component';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';

interface HierarchyNode {
  id: number;
  type: number;
  title: string;
  name: string;
  details: string;
  isOpen?: boolean;
  isOnline?: boolean;
  children?: HierarchyNode[];
}

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
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private hierarchyService = inject(HierarchyService);
  private settingsService = inject(SettingsService);
  private authService = inject(AuthService);
  private socketService = inject(SocketService);
  private messageService = inject(MessageService); // Keep active for socket listeners

  level1_hierarchy: any = null;
  selectedNode: any = null;
  profileNode: any = null;
  callNode: any = null;
  messageNode: any = null;
  showProfileModal: boolean = false;
  showCallModal: boolean = false;
  showMessageModal: boolean = false;
  isIncomingCall: boolean = false;
  popoverPosition = { top: 0, left: 0 };

  ngOnInit() {
    this.settingsService.loadStatusActions().subscribe();
    this.hierarchyService.getHierarchy().subscribe({
      next: (data) => {
        this.level1_hierarchy = data;
        // After hierarchy is loaded, check initial presence if already available
        const currentOnline = this.socketService.initialPresenceSubject.value;
        if (currentOnline.length > 0 && this.level1_hierarchy) {
          this.applyInitialPresence(this.level1_hierarchy, currentOnline);
        }
      },
      error: (err) => console.error('Error fetching hierarchy:', err)
    });

    // Listen for initial presence (full list of online descendants)
    this.socketService.initialPresence$.subscribe(onlineIds => {
      if (this.level1_hierarchy && onlineIds.length > 0) {
        this.applyInitialPresence(this.level1_hierarchy, onlineIds);
      }
    });

    // Listen for individual presence updates (online/offline)
    this.socketService.presenceUpdate$.subscribe(data => {
      if (this.level1_hierarchy) {
        this.updatePresence(this.level1_hierarchy, data.userId, data.status === 'online');
      }
    });

    // Listen for incoming calls
    this.socketService.incomingCall$.subscribe(data => {
      console.log('🔔 Incoming call signal received in HomeComponent:', data);
      this.callNode = { id: data.from, name: data.callerName, title: 'Incoming Call...' };
      this.isIncomingCall = true;
      this.showCallModal = true;
    });
  }

  private applyInitialPresence(node: any, onlineIds: number[]) {
    node.isOnline = onlineIds.includes(node.id);
    if (node.children) {
      node.children.forEach((child: any) => this.applyInitialPresence(child, onlineIds));
    }
  }

  private updatePresence(node: any, userId: number, isOnline: boolean) {
    if (node.id === userId) {
      node.isOnline = isOnline;
      return true;
    }
    if (node.children) {
      for (const child of node.children) {
        if (this.updatePresence(child, userId, isOnline)) return true;
      }
    }
    return false;
  }

  // Helper getters to split the tree into branches for the existing UI layout
  get branch1_L1() { 
    return this.level1_hierarchy?.children?.[0]; 
  }
  get branch1_L2() { 
    return this.branch1_L1?.children || []; 
  }
  get branch1_L3() { 
    return this.branch1_L2.flatMap((d: any) => d.children || []); 
  }
  get branch1_L4() { 
    return this.branch1_L3.flatMap((h: any) => h.children || []); 
  }

  get branch2_L1() { 
    return this.level1_hierarchy?.children?.[1]; 
  }
  get branch2_L2() { 
    return this.branch2_L1?.children || []; 
  }
  get branch2_L3() { 
    return this.branch2_L2.flatMap((a: any) => a.children || []); 
  }
  get branch2_L4() { 
    return this.branch2_L3.flatMap((ap: any) => ap.children || []); 
  }

  // Get all branches (direct children of president)
  get branches() {
    return this.level1_hierarchy?.children || [];
  }

  // Dynamic grid class based on number of branches
  getBranchesGridClass(): string {
    const count = this.branches.length;
    if (count === 0 || count === 1) {
      return 'grid grid-cols-1';
    }
    if (count === 2) {
      return 'grid grid-cols-1 md:grid-cols-2';
    }
    // For 3 or 4+ branches: 2x2 grid layout on medium screens and above
    return 'grid grid-cols-1 md:grid-cols-2';
  }

  // Helper method to get child count for responsive display
  getChildrenCount(node: any): number {
    return node?.children?.length || 0;
  }

  // Generic Hierarchy Getters (for any logged-in user)
  get userL1() { return this.level1_hierarchy; }
  get userL2() { return this.level1_hierarchy?.children || []; }
  get userL3() { return this.userL2.flatMap((c: any) => c.children || []); }
  get userL4() { return this.userL3.flatMap((gc: any) => gc.children || []); }

  toggleAccordion(node: HierarchyNode) {
    node.isOpen = !node.isOpen;
  }

  onSelectNode(data: any) {
    this.selectedNode = data.node;
  }

  onOpenProfile(node: any) {
    this.profileNode = node;
    this.showProfileModal = true;
  }

  closeProfile() {
    this.showProfileModal = false;
    this.profileNode = null;
  }

  onOpenCall(node: any) {
    this.callNode = node;
    this.showCallModal = true;
  }

  closeCall() {
    this.showCallModal = false;
    this.callNode = null;
    this.isIncomingCall = false;
  }

  onOpenMessage(node: any) {
    this.messageNode = node;
    this.showMessageModal = true;
  }

  closeMessage() {
    this.showMessageModal = false;
    this.messageNode = null;
  }

  getNodeColor(type: any): string {
    const numericType = Number(type);
    switch (numericType) {
      case 1: return 'brand';
      case 2: return 'blue';
      case 3: return 'success';
      case 4: return 'warning';
      default: return 'brand';
    }
  }

  closePopover() {
    this.selectedNode = null;
  }
}
