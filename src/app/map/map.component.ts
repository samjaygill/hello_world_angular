import { NgSwitch, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, NgSwitch],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  viewmode = 'map';

}
