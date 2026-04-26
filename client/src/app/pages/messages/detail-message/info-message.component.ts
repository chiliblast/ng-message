import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css'
})
export class InfoMessageComponent {
  message = {
    subject: 'Contact For "Website Design"',
    sender: 'Codescandy',
    email: 'hello@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    time: '4 of 120',
    body: [
      'Hello Dear Alexander,',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut rutrum mi. Aenean ac leo non justo suscipit consectetur...',
      'Praesent ut rutrum mi. Aenean ac leo non justo suscipit consectetur. Nam vestibulum eleifend magna quis porta.',
      'Nullam tincidunt sodales diam, quis rhoncus dolor aliquet a...',
      'Suspendisse semper vel turpis vitae aliquam. Aenean semper dui in consequat ullamcorper.',
      'Nullam tincidunt sodales diam, quis rhoncus dolor aliquet a...',
      'Praesent ut rutrum mi. Aenean ac leo non justo suscipit consectetur.'
    ],
    attachments: [
      { name: 'Guidelines.pdf', type: 'PDF', size: 'Download', icon: 'PDF' },
      { name: 'Branding Assets', type: 'Media', size: 'Download', icon: 'Drive' }
    ]
  };
}
