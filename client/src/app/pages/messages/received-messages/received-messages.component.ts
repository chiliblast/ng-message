import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message.service';
import { SocketService } from '../../../services/socket.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-received-messages',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './received-messages.component.html'
})
export class ReceivedMessagesComponent implements OnInit {
  private messageService = inject(MessageService);
  private socketService = inject(SocketService);
  private themeService = inject(ThemeService);
  
  messages: any[] = [];
  theme$ = this.themeService.theme$;
  gridThemeClass: string = this.themeService.currentTheme === 'dark' ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';
  private gridApi: any;

  columnDefs: ColDef[] = [
    { field: 'sender', headerName: 'From', flex: 1, sortable: true, filter: true },
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
    }
  ];

  defaultColDef: ColDef = {
    resizable: true
  };

  ngOnInit() {
    this.loadMessages();

    // Auto-refresh when a new message arrives via socket
    this.socketService.onNewMessage().subscribe(() => {
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

  loadMessages() {
    this.messageService.getReceivedMessages().subscribe(data => {
      this.messages = data;
    });
  }
}
