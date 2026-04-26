import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message.service';
import { SocketService } from '../../../services/socket.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { OfflineStorageService } from '../../../services/offline-storage.service';
import { OfflineSyncService } from '../../../services/offline-sync.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-sent-message',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './sent-message.component.html'
})
export class SentMessageComponent implements OnInit {
  private messageService = inject(MessageService);
  private socketService = inject(SocketService);
  private themeService = inject(ThemeService);
  private storage = inject(OfflineStorageService);
  private sync = inject(OfflineSyncService);
  
  messages: any[] = [];
  theme$ = this.themeService.theme$;
  gridThemeClass: string = this.themeService.currentTheme === 'dark' ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';
  private gridApi: any;

  columnDefs: ColDef[] = [
    { field: 'recipient', headerName: 'To', flex: 1, sortable: true, filter: true },
    { field: 'snippet', headerName: 'Message', flex: 2, sortable: true, filter: true },
    { 
      field: 'label', 
      headerName: 'Category', 
      flex: 1,
      cellRenderer: (params: any) => {
        if (!params.value) return '';
        return `<span style="background-color: ${params.data.labelColor}15; color: ${params.data.labelColor}; padding: 4px 8px; border-radius: 6px; font-weight: bold; font-size: 10px; border: 1px solid ${params.data.labelColor}20;">${params.value}</span>`;
      }
    },
    { 
      field: 'time', 
      headerName: 'Time', 
      flex: 1, 
      sortable: true,
      valueFormatter: (params) => new Date(params.value).toLocaleString()
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      cellRenderer: (params: any) => {
        const isPending = params.value === 'pending';
        const color = isPending ? '#f59e0b' : '#10b981';
        const label = isPending ? 'Pending' : 'Sent';
        return `<span style="color: ${color}; font-weight: bold; font-size: 10px; display: flex; items-center; gap: 4px;">
          ${isPending ? '<span class="animate-pulse">●</span>' : '●'} ${label}
        </span>`;
      }
    }
  ];

  defaultColDef: ColDef = {
    resizable: true
  };

  ngOnInit() {
    this.loadMessages();

    // Auto-refresh when a message is sent via socket
    this.socketService.onMessageSent().subscribe(() => {
      this.loadMessages();
    });

    // Auto-refresh when offline messages are synced
    this.sync.syncCompleted$.subscribe(() => {
      this.loadMessages();
    });

    this.theme$.subscribe((theme: any) => {
      this.gridThemeClass = theme === 'dark' ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  onFilterTextBoxChanged(event: any) {
    this.gridApi.setGridOption('quickFilterText', event.target.value);
  }

  async loadMessages() {
    const pending = await this.storage.getPendingMessages();
    this.messageService.getSentMessages().subscribe(data => {
      this.messages = [...pending, ...data];
    });
  }
}
