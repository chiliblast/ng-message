import { inject, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/ui/modal/modal.component';
import { SettingsService } from '../../../../services/settings.service';

import { MessageService } from '../../../../services/message.service';
import { Html5Qrcode } from 'html5-qrcode';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, Undo } from 'ckeditor5';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, CKEditorModule],
  templateUrl: './message-modal.component.html'
})
export class MessageModalComponent {
  public Editor = ClassicEditor;
  public editorConfig = {
    plugins: [ Essentials, Paragraph, Bold, Italic, Undo ],
    toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'paragraph' ],
    licenseKey: 'GPL'
  };
  private settingsService = inject(SettingsService);
  private messageService = inject(MessageService);
  statusActions$ = this.settingsService.statusActions$;

  @Input() isOpen = false;
  @Input() node: any = null;
  @Output() close = new EventEmitter<void>();

  messageText: string = '';
  selectedActionId: any = null;
  isSending = false;
  isScanning = false;
  private html5QrCode: Html5Qrcode | null = null;

  selectCategory(id: any) {
    this.selectedActionId = id;
  }

  hasAction(actionId: number) {
    return this.node?.actions?.some((a: any) => a.id === actionId);
  }

  getAction(actionId: number) {
    return this.node?.actions?.find((a: any) => a.id === actionId);
  }

  startScanning() {
    this.isScanning = true;
    setTimeout(() => {
      this.html5QrCode = new Html5Qrcode("qr-reader");
      this.html5QrCode.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 150, height: 150 }
        },
        (decodedText: string) => {
          this.messageText = decodedText;
          this.stopScanning();
        },
        () => {} // Ignore errors
      ).catch((err) => {
        console.error('Failed to start scanner:', err);
        this.stopScanning();
      });
    }, 100);
  }

  stopScanning() {
    if (this.html5QrCode) {
      this.html5QrCode.stop().then(() => {
        this.isScanning = false;
      }).catch((err) => {
        console.error('Failed to stop scanner:', err);
        this.isScanning = false;
      });
    } else {
      this.isScanning = false;
    }
  }

  sendMessage() {
    if (!this.node || (!this.messageText && !this.selectedActionId)) return;

    this.isSending = true;

    // Fetch all actions to find the metadata for the selected one
    this.statusActions$.subscribe(actions => {
        const selectedCategory = actions.find((c: any) => c.id === this.selectedActionId);

        this.messageService.sendMessage(
          this.node.id, 
          this.selectedActionId, 
          this.messageText,
          {
            recipient: this.node.name,
            label: selectedCategory?.label || '',
            labelColor: selectedCategory?.color || '#000000'
          }
        ).subscribe({
          next: () => {
            this.isSending = false;
            this.close.emit();
            this.messageText = '';
            this.selectedActionId = null;
          },
          error: (err) => {
            this.isSending = false;
            console.error('Failed to send message:', err);
            alert('Failed to send message. Please try again.');
          }
        });
    });
  }
}
