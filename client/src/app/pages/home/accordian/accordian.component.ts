import { inject, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../services/settings.service';
import { MessageService } from '../../../services/message.service';
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
  
  statusActions$ = this.settingsService.statusActions$;
  isBlinking$ = this.messageService.blinkingNodes$.pipe(
    map(nodes => nodes.has(this.node?.groupId))
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
}
