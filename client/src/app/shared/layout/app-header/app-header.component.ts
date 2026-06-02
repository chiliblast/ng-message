import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { ThemeToggleButtonComponent } from '../../components/common/theme-toggle/theme-toggle-button.component';
import { NotificationDropdownComponent } from '../../components/header/notification-dropdown/notification-dropdown.component';
import { UserDropdownComponent } from '../../components/header/user-dropdown/user-dropdown.component';
import { SocketService } from '../../../services/socket.service';
import { NotificationService } from '../../../services/notification.service';
import { SearchService } from '../../../services/search.service';
import { AuthService } from '../../../services/auth.service';
import { HierarchyService } from '../../../services/hierarchy.service';
import { FormsModule } from '@angular/forms';
import { Tree, TreeItem, TreeItemGroup } from '@angular/aria/tree';
import { MessageModalComponent } from '../../../pages/home/modals/message-modal/message-modal.component';

declare var HTMLMagnifier: any;

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    ThemeToggleButtonComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    FontAwesomeModule,
    FormsModule,
    Tree, TreeItem, TreeItemGroup,
    MessageModalComponent
  ],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  isApplicationMenuOpen = false;
  readonly isMobileOpen$;
  readonly connected$;
  faServer = faServer;
  
  magnifier: any;
  isMagnifierEnabled = false;

  dropdownNodes: any[] = [];
  selectedNodes: any[] = [];
  isDropdownOpen = false;
  showMessageModal = false;

  user$;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    public sidebarService: SidebarService,
    private socketService: SocketService,
    private notificationService: NotificationService,
    private searchService: SearchService,
    private authService: AuthService,
    private hierarchyService: HierarchyService
  ) {
    this.user$ = this.authService.user$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    this.connected$ = this.socketService.connected$;

    this.hierarchyService.getHierarchy().subscribe(tree => {
      this.dropdownNodes = tree;
    });

    this.hierarchyService.selectedNodes$.subscribe(nodes => {
      this.selectedNodes = nodes;
    });

    // Request Push Notification Permission
    this.notificationService.subscribeToNotifications();
    this.notificationService.listenForNotifications();
    
    try {
      this.magnifier = new HTMLMagnifier({ zoom: 2, shape: 'square', width: 400, height: 300 });
    } catch (e) {
      console.error('Failed to initialize HTMLMagnifier:', e);
    }
  }

  toggleMagnifier(event: MouseEvent) {
    this.isMagnifierEnabled = !this.isMagnifierEnabled;
    if (this.isMagnifierEnabled) {
      this.magnifier.show(event);
    } else {
      this.magnifier.hide();
    }
  }

  toggleNodeSelection(node: any) {
    const currentSelected = [...this.hierarchyService.getSelectedNodes()];
    const index = currentSelected.findIndex(n => n.groupId === node.groupId);
    if (index > -1) {
      currentSelected.splice(index, 1);
    } else {
      currentSelected.push(node);
    }
    this.hierarchyService.setSelectedNodes(currentSelected);
  }

  isSelected(node: any): boolean {
    return this.selectedNodes.some(n => n.groupId === node.groupId);
  }

  openMessageModal() {
    this.showMessageModal = true;
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

  getCheckboxColorClass(node: any): string {
    const color = this.getNodeColor(node.depthFromStart);
    switch (color) {
      case 'brand': return 'border-brand-500 text-brand-500 focus:ring-brand-500';
      case 'blue': return 'border-blue-500 text-blue-500 focus:ring-blue-500';
      case 'success': return 'border-success-500 text-success-500 focus:ring-success-500';
      case 'warning': return 'border-warning-500 text-warning-500 focus:ring-warning-500';
      case 'purple': return 'border-purple-500 text-purple-500 focus:ring-purple-500';
      case 'indigo': return 'border-indigo-500 text-indigo-500 focus:ring-indigo-500';
      default: return 'border-gray-300 text-brand-500 focus:ring-brand-500';
    }
  }

  onSearch(event: any) {
    const query = event.target.value;
    this.searchService.setSearchQuery(query);
  }

  handleToggle() {
    if (window.innerWidth >= 1280) {
      this.sidebarService.toggleExpanded();
    } else {
      this.sidebarService.toggleMobileOpen();
    }
  }

  toggleApplicationMenu() {
    this.isApplicationMenuOpen = !this.isApplicationMenuOpen;
  }

  ngAfterViewInit() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  };
}
