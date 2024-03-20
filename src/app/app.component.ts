import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { MapComponent } from './map/map.component';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumComponent, AlbumsComponent, MapComponent, InputFormatDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello_world';
}
