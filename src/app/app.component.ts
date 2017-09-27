import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mapCenter: object;
  zoom: number;
  markers: any;
  mapType: string;
  apiKey: string;

  constructor() { }

  ngOnInit() {
    this.mapCenter = {
      lat: 22.5688,
      lng: 113.5688,
    };
    this.zoom = 8;
    this.markers = [
      {
        lat: 22.0866,
        lng: 114.0866,
      },
      {
        lat: 23.0888,
        lng: 113.0888,
      },
    ];
    this.apiKey = 'AIzaSyBXGL9iyEa30kXQEN13oelo31HSaLNpS5g';
  }

}
