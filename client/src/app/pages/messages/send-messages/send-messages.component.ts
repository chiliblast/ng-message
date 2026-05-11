import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from '../../home/accordian/accordian.component';
import { HierarchyService } from '../../../services/hierarchy.service';

@Component({
  selector: 'app-send-messages',
  standalone: true,
  imports: [CommonModule, AccordianComponent],
  templateUrl: './send-messages.component.html'
})
export class SendMessagesComponent implements OnInit {
  private hierarchyService = inject(HierarchyService);
  showNewMessage = false;
  openSection = 'templates';
  level1_hierarchy: any = null;
  selectedRecipient: string = '';

  orderHistory = [
    { id: 'ORD-001', from: 'John Doe', to: 'Support', date: '2024-04-25', status: 'Delivered' },
    { id: 'ORD-002', from: 'Jane Smith', to: 'Sales', date: '2024-04-24', status: 'Pending' },
    { id: 'ORD-003', from: 'Bob Johnson', to: 'Billing', date: '2024-04-23', status: 'Cancelled' },
  ];

  ngOnInit() {
    this.hierarchyService.getHierarchy().subscribe({
      next: (data) => {console.log(" Hierarchy data:", data)
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
}
