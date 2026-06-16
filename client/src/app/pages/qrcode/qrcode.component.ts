import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qrcode-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qrcode.component.html'
})
export class QrCodeGeneratorComponent implements AfterViewInit {
  field1: string = '';
  field2: string = '';
  qrCodeBase64: string = '';

  ngAfterViewInit() {
    this.updateQrCode();
  }

  getJsonData(): string {
    const obj = {
      field1: this.field1,
      field2: this.field2
    };
    return JSON.stringify(obj, null, 2);
  }

  generateQrCode() {
    const canvas = document.getElementById('qr-page-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    // We can generate the QR code even if fields are empty, or show a placeholder.
    // Let's generate it using the JSON string representation
    const data = this.getJsonData();
    
    QRCode.toCanvas(canvas, data, {
      width: 240,
      margin: 1.5,
      color: {
        dark: '#0f172a', // Slate 900
        light: '#ffffff'
      }
    }, (error) => {
      if (error) console.error('Error generating QR code:', error);
    });
  }

  updateQrCode() {
    setTimeout(() => {
      this.generateQrCode();
    }, 0);
  }

  downloadQrCode() {
    const canvas = document.getElementById('qr-page-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `qrcode-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  copyJson() {
    const json = this.getJsonData();
    navigator.clipboard.writeText(json).then(() => {
      alert('JSON data copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy JSON:', err);
    });
  }

  submit() {
    const canvas = document.getElementById('qr-page-canvas') as HTMLCanvasElement;
    if (!canvas) {
      alert('QR Code canvas element not found.');
      return;
    }

    this.qrCodeBase64 = canvas.toDataURL('image/png');
    console.log('Saved Base64 QR Code Object:', this.qrCodeBase64);
    alert('QR Code saved as Base64 successfully! Object is logged in the console.');
  }

  copyBase64() {
    if (!this.qrCodeBase64) return;
    navigator.clipboard.writeText(this.qrCodeBase64).then(() => {
      alert('Base64 string copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy Base64 string:', err);
    });
  }
}
