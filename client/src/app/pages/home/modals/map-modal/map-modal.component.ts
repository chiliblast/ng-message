import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/ui/modal/modal.component';

@Component({
  selector: 'app-map-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './map-modal.component.html'
})
export class MapModalComponent {
  @Input() isOpen = false;
  @Input() node: any = null;
  @Output() close = new EventEmitter<void>();
}
