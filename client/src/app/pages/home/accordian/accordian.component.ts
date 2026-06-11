import { inject, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../services/settings.service';
import { MessageService } from '../../../services/message.service';
import { HierarchyService } from '../../../services/hierarchy.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordian.component.html'
})
export class AccordianComponent implements OnInit {
  private settingsService = inject(SettingsService);
  private messageService = inject(MessageService);
  private hierarchyService = inject(HierarchyService);
  
  statusActions$ = this.settingsService.statusActions$;
  isBlinking$ = this.messageService.blinkingNodes$.pipe(
    map(nodes => nodes.has(this.node?.groupId) || nodes.has(this.node?.groupUuid))
  );
  
  @Input() node: any;
  @Input() color: string = 'brand';
  @Input() isSelected: boolean = false;
  @Input() defaultOpen: boolean = true;
  @Input() isHighlighted: boolean = false;
  
  @Output() onSelect = new EventEmitter<any>();
  @Output() onShowProfile = new EventEmitter<any>();
  @Output() onShowCall = new EventEmitter<any>();
  @Output() onShowMessage = new EventEmitter<any>();

  get isSelectedInDropdown(): boolean {
    return this.hierarchyService.getSelectedNodes().some(n => n.groupId === this.node?.groupId);
  }

  isNodeSelectedInDropdown(node: any): boolean {
    return this.hierarchyService.getSelectedNodes().some(n => n.groupId === node.groupId);
  }

  ngOnInit() {
    if (this.node && this.node.isOpen === undefined) {
      this.node.isOpen = this.defaultOpen;
    }
  }

  getAction(actionId: number) {
    return this.node?.actions?.find((a: any) => a.id === actionId);
  }

  toggleAccordion() {
    if (this.node) {
      this.node.isOpen = !this.node.isOpen;
    }
  }

  selectNode(event: MouseEvent) {
    event.stopPropagation();
    if (this.node) {
      this.onSelect.emit({ node: this.node, event });
    }
  }

  showProfile(event: MouseEvent) {
    event.stopPropagation();
    if (this.node) {
      this.onShowProfile.emit(this.node);
    }
  }

  startCall(event: MouseEvent) {
    event.stopPropagation();
    if (this.node) {
      this.onShowCall.emit(this.node);
    }
  }

  showMessage(event: MouseEvent) {
    event.stopPropagation();
    if (this.node) {
      this.onShowMessage.emit(this.node);
    }
  }

  onActionBadgeClick(actionId: number, event: MouseEvent) {
    event.stopPropagation();
    if (this.node) {
      this.onShowMessage.emit({ node: this.node, actionId });
    }
  }

  onNodeBadgeClick(node: any, event: MouseEvent) {
    event.stopPropagation();
    this.onSelect.emit({ node: node, event });
  }

  getShadowColor(color: string): string {
    if (!color) return 'rgba(0, 0, 0, 0.15)';
    const cleanHex = color.replace('#', '').substring(0, 6);
    return `#${cleanHex}26`; // 26 in hex is ~15% opacity
  }

  getBgColor(color: string): string {
    if (!color) return 'transparent';
    const cleanHex = color.replace('#', '').substring(0, 6);
    return `#${cleanHex}0d`; // 0d in hex is ~5% opacity
  }

  isSecondLastLevel(node: any): boolean {
    return node && node.children && node.children.length > 0 &&
           node.children.every((child: any) => !child.children || child.children.length === 0);
  }
}
