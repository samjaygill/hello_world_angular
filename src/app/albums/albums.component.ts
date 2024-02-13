import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumsServiceService } from '../albums-service.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor],
  template: `
  <h2>{{title}}</h2>
  <ul>
  <li *ngFor="let album of albums">
  {{album}}
  </li>
  </ul>
  <button (click)="onSave($event)">Save</button>
  `,
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  title = "List of Albums";
  albums: any;
  isActive = true;

  constructor(service: AlbumsServiceService){
    this.albums = service.getAlbums();
  }

  onSave($event: any){
    console.log("Button was clicked", $event);
    
  }

}
