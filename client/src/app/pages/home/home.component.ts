import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian/accordian.component';

interface HierarchyNode {
  level: number;
  title: string;
  name: string;
  details: string;
  isOpen?: boolean;
  children?: HierarchyNode[];
}



import { inject, OnInit } from '@angular/core';
import { HierarchyService } from '../../services/hierarchy.service';
import { SettingsService } from '../../services/settings.service';
import { AuthService } from '../../services/auth.service';
import { SocketService } from '../../services/socket.service';
import { MessageService } from '../../services/message.service';

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
      },
      error: (err) => console.error('Error fetching hierarchy:', err)
    });

    // Listen for incoming calls
    this.socketService.incomingCall$.subscribe(data => {
      console.log('🔔 Incoming call signal received in HomeComponent:', data);
      this.callNode = { id: data.from, name: data.callerName, title: 'Incoming Call...' };
      this.isIncomingCall = true;
      this.showCallModal = true;
    });
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

  getNodeColor(level: number): string {
    switch (level) {
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
