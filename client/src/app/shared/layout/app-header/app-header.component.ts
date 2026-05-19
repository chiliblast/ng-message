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

declare var HTMLMagnifier: any;

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    ThemeToggleButtonComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    FontAwesomeModule
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

  user$;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    public sidebarService: SidebarService,
    private socketService: SocketService,
    private notificationService: NotificationService,
    private searchService: SearchService,
    private authService: AuthService
  ) {
    this.user$ = this.authService.user$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    this.connected$ = this.socketService.connected$;

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
