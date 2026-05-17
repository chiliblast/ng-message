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
    map(nodes => nodes.has(this.node.id))
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
    // Set default open state
    this.node.isOpen = this.defaultOpen;
  }

  getAction(actionId: number) {
    return this.node.actions?.find((a: any) => a.id === actionId);
  }

  toggleAccordion() {
    this.node.isOpen = !this.node.isOpen;
  }

  selectNode(event: MouseEvent) {
    this.onSelect.emit({ node: this.node, event });
  }

  showProfile(event: MouseEvent) {
    event.stopPropagation(); // Prevent selecting the node when clicking map
    this.onShowProfile.emit(this.node);
  }

  startCall(event: MouseEvent) {
    event.stopPropagation();
    this.onShowCall.emit(this.node);
  }

  showMessage(event: MouseEvent) {
    event.stopPropagation();
    this.onShowMessage.emit(this.node);
  }
}
