import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faHome, faPaperPlane, faInbox, faInfoCircle, faMapMarkerAlt, faQrcode } from '@fortawesome/free-solid-svg-icons';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private iconMap: { [key: string]: any } = {
    'faHome': faHome,
    'faPaperPlane': faPaperPlane,
    'faInbox': faInbox,
    'faInfoCircle': faInfoCircle,
    'faMapMarkerAlt': faMapMarkerAlt,
    'faQrcode': faQrcode
  };

  getMenuItems(): Observable<any[]> {
    // Mocking server response
    const menuItems = [
      { name: 'Home', icon: 'faHome', path: '/' },
      { name: 'Send Message', icon: 'faPaperPlane', path: '/messages/send' },
      { name: 'Received Messages', icon: 'faInbox', path: '/messages/received' },
      { name: 'Sent Messages', icon: 'faPaperPlane', path: '/messages/sent' },
      { name: 'Info Messages', icon: 'faInfoCircle', path: '/messages/info' }
    ];
    return of(menuItems);
  }

  getOthersItems(): Observable<any[]> {
    const othersItems = [
      { name: 'Location Import', icon: 'faMapMarkerAlt', path: '/location-import' },
      { name: 'QR Generator', icon: 'faQrcode', path: '/qrcode' }
    ];
    return of(othersItems);
  }

  getIcon(iconName: string): any {
    return this.iconMap[iconName] || faInfoCircle; // fallback
  }
}
