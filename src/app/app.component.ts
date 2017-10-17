import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mapCenter: object;
  zoom: number;
  markers: object;
  mapType: string;
  apiKey: string;
  polylinePoints: object[];

  constructor() { }

  ngOnInit() {
    this.mapCenter = {
      lat: 37.08,
      lng: 119.48,
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
    this.polylinePoints = polylinePoints;
  }

}

const polylinePoints = [
  { lat: 37.12, lng: 119.49 },
  { lat: 37.1, lng: 119.5 },
  { lat: 37.1, lng: 119.48 },
  { lat: 37.08, lng: 119.48 },
  { lat: 37.07, lng: 119.47 },
  { lat: 37.05, lng: 119.47 },
  { lat: 37.0, lng: 119.47 },
  { lat: 36.93, lng: 119.42 },
];
