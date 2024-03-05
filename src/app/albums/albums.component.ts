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

import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumComponent, CommonModule],
  template: `
    <h2>{{ title }}</h2>
    <div *ngFor="let album of albums">
      <app-album [details]="album" (ownedEvent)="updateOwned($event)" />
    </div>
  `,
})
export class AlbumsComponent {
  title = "List Of Albums"
  albums = [
      {id: 1, title: "Take Care", artist: "Drake", owned:true},
      {id: 2, title: "11:11", artist: "Chris Brown", owned:true},
      {id: 3,title: "Good Girl Gone Bad", artist: "Rihanna", owned:true},
      {id: 4, title: "Lemonade", artist: "Beyonce", owned:false},

  ]

  updateOwned(id:number){
    this.albums[id-1].owned = !this.albums[id-1].owned
  }
}
