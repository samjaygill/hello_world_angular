// import { CommonModule, NgFor } from '@angular/common';
// import { Component } from '@angular/core';
// import { AlbumsServiceService } from '../albums-service.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-albums',
//   standalone: true,
//   imports: [NgFor, FormsModule, CommonModule],
//   template: `
//     <h2>{{ title }}</h2>
//     {{ album.title | uppercase }}<br />
//     {{ album.artist | lowercase }}<br />
//     {{ album.rating | number : '1.2-2' }}<br />
//     {{ album.price | currency : 'GBP' }}<br />
//     {{ album.releaseDate | date : 'shortDate' }}
//   `,
//   styleUrl: './albums.component.css',
// })
// export class AlbumsComponent {
//   title = 'List of Albums';
//   albums: any;
//   isActive = true;
//   artist = 'Beyonce';
//   album = {
//     title: 'Take Care',
//     artist: 'Drake',
//     rating: 90.99,
//     price: 10.656,
//     releaseDate: new Date('2015, 6, 15'),
//   };

//   constructor(service: AlbumsServiceService) {
//     this.albums = service.getAlbums();
//   }

//   onSave($event: any) {
//     $event.stopPropagation();
//     console.log('Button was clicked', $event);
//   }

//   onDivClicked() {
//     console.log('div clicked');
//   }

//   onKeyUp() {
//     console.log(this.artist);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumComponent, CommonModule],
  template: `
    <h2>{{ title }}</h2>
    <button (click)="onAdd()">Add</button>
    <div *ngFor="let album of albums; index as i">
      {{ i }} <app-album [details]="album" (ownedEvent)="updateOwned($event)" />
    </div>
  `,
})
export class AlbumsComponent {
  title = 'List Of Albums';
  albums = [
    { id: 0, title: 'Lemonade', artist: 'Beyonce', owned: false },
    { id: 1, title: 'Take Care', artist: 'Drake', owned: true },
    { id: 2, title: '11:11', artist: 'Chris Brown', owned: true },
    { id: 3, title: 'Good Girl Gone Bad', artist: 'Rihanna', owned: true },
  ];

  updateOwned(id: number) {
    this.albums[id].owned = !this.albums[id].owned;
  }

  onAdd() {
    this.albums.push({
      id: 4,
      title: 'Shoot for the moon',
      artist: 'Pop Smoke',
      owned: false,
    });
  }
}
