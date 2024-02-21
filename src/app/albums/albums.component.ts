import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumsServiceService } from '../albums-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  template: `
    <h2>{{ title }}</h2>
    {{ album.title | uppercase }}<br />
    {{ album.artist | lowercase }}<br />
    {{ album.rating | number : '1.2-2' }}<br />
    {{ album.price | currency : 'GBP' }}<br />
    {{ album.releaseDate | date : 'shortDate' }}
  `,
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  title = 'List of Albums';
  albums: any;
  isActive = true;
  artist = 'Beyonce';
  album = {
    title: 'Take Care',
    artist: 'Drake',
    rating: 90.99,
    price: 10.656,
    releaseDate: new Date('2015, 6, 15'),
  };

  constructor(service: AlbumsServiceService) {
    this.albums = service.getAlbums();
  }

  onSave($event: any) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClicked() {
    console.log('div clicked');
  }

  onKeyUp() {
    console.log(this.artist);
  }
}
