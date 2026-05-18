import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from '../../home/accordian/accordian.component';
import { HierarchyService } from '../../../services/hierarchy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-messages',
  standalone: true,
  imports: [CommonModule, AccordianComponent, FormsModule],
  templateUrl: './send-messages.component.html'
})
export class SendMessagesComponent implements OnInit {
  private hierarchyService = inject(HierarchyService);
  showNewMessage = false;
  openSection = 'templates';
  level1_hierarchy: any = null;
  selectedRecipient: string = '';
  selectedOrder: any = null;
  messageText: string = '';
  isSending: boolean = false;

  orderHistory = [
    { id: 'ORD-001', from: 'John Doe', to: 'Support', date: '2024-04-25', status: 'Delivered', progress: 100 },
    { id: 'ORD-002', from: 'Jane Smith', to: 'Sales', date: '2024-04-24', status: 'Pending', progress: 30 },
    { id: 'ORD-003', from: 'Bob Johnson', to: 'Billing', date: '2024-04-23', status: 'Cancelled', progress: 0 },
  ];

  ngOnInit() {
    this.hierarchyService.getHierarchy().subscribe({
      next: (data) => {
        this.setAllOpen(data);
        this.level1_hierarchy = data;
      },
      error: (err) => console.error('Error fetching hierarchy:', err)
    });
  }

  private setAllOpen(node: any) {
    if (!node) return;
    node.isOpen = true;
    if (node.children) {
      node.children.forEach((child: any) => this.setAllOpen(child));
    }
  }

  get userL1() { return this.level1_hierarchy; }
  get userL2() { return this.level1_hierarchy?.children || []; }
  get userL3() { return this.userL2.flatMap((c: any) => c.children || []); }
  get userL4() { return this.userL3.flatMap((gc: any) => gc.children || []); }
  get userL5() { return this.userL4.flatMap((ggc: any) => ggc.children || []); }

  selectRecipient(node: any) {
    this.selectedRecipient = node.name;
  }

  toggleView() {
    this.showNewMessage = !this.showNewMessage;
  }

  selectOrder(order: any) {
    this.selectedOrder = order;
  }

  updateProgress(progress: number) {
    if (this.selectedOrder) {
      this.selectedOrder.progress = progress;
      if (progress === 100) {
        this.selectedOrder.status = 'Completed';
      } else if (progress > 0) {
        this.selectedOrder.status = 'In Progress';
      } else {
        this.selectedOrder.status = 'Pending';
      }
    }
  }

  sendReply() {
    if (this.selectedOrder && this.messageText) {
      this.isSending = true;
      console.log(`Sending reply for ${this.selectedOrder.id}: ${this.messageText}`);
      
      // Simulate API call
      setTimeout(() => {
        this.isSending = false;
        this.messageText = '';
        console.log('Reply sent successfully');
      }, 2000); // 2 seconds delay
    }
  }
}
