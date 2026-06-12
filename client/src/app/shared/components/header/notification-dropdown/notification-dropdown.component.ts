import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { DropdownItemComponent } from '../../ui/dropdown/dropdown-item/dropdown-item.component';
import { MessageService } from '../../../../services/message.service';
import { SocketService } from '../../../../services/socket.service';

@Component({
  selector: 'app-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  imports: [CommonModule, RouterModule, DropdownComponent, DropdownItemComponent]
})
export class NotificationDropdownComponent implements OnInit {
  isOpen = false;
  notifying = false;
  messages: any[] = [];

  private messageService = inject(MessageService);
  private socketService = inject(SocketService);

  ngOnInit() {
    this.loadMessages();

    // Auto-refresh when a new message arrives via socket
    this.socketService.onNewMessage().subscribe(() => {
      this.loadMessages();
    });
  }

  loadMessages() {
    this.messageService.getMessagesHistory().subscribe(data => {
      this.messages = data;
      // Show notifying indicator if there are messages
      if (this.messages.length > 0) {
        this.notifying = true;
      }
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.notifying = false;
    }
  }

  closeDropdown() {
    this.isOpen = false;
  }

  formatTime(timeStr: string): string {
    if (!timeStr) return '';
    try {
      const diffMs = Date.now() - new Date(timeStr).getTime();
      const diffMins = Math.floor(diffMs / 60000);
      if (diffMins < 1) return 'just now';
      if (diffMins < 60) return `${diffMins} min ago`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return `${diffHours} hr ago`;
      return new Date(timeStr).toLocaleDateString();
    } catch {
      return '';
    }
  }
}