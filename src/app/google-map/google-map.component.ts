/**
 * basic map type: 
 * SHOW: single or multiple markers, show info window
 * SEARCH: search marker by address or lat & lng, can drag marker
 * CLUSTER: massive number of markers
 */
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { GoogleMapsLoader } from './google-maps.loader';

declare const google: any;

@Component({
  selector: 'angular-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent {
  @Input() apiKey: string;
  @Input() mapType: string;
  @Input()
  center: object = {
    lat: 37.08,
    lng: 119.48,
  };
  @Input() zoom: number;
  @Input() markers: any;
  @Input() polylinePoints: any[];
  mapObj: any;
  googleMarkers: object[] = [];
  currWindow: any;
  currPolyline: any;

  constructor(private _elem: ElementRef) {}

  ngOnInit() {
    const loader = new GoogleMapsLoader(this.apiKey);
    loader.load().then(res => {
      // console.log('ta da');
      // console.log('GoogleMapsLoader.load.then', res);
      this.initMap();
    });
  }

  initMap() {
    const container = this._elem.nativeElement.querySelector('#google-map-container');
    const defaultOpts = {
      center: this.center,
      zoom: this.zoom,
    };
    // console.log(google, container);
    const map = new google.maps.Map(container, defaultOpts);
    this.mapObj = map;
    if ('SHOW' === this.mapType) {
      this.markers.forEach((mk, index) => {
        const marker = new google.maps.Marker({
          map,
          position: mk,
        });
        this.googleMarkers.push(marker);
        const infoWindow = new google.maps.InfoWindow({
          content: 'this is marker ' + index.toString(),
        });
        marker.addListener('click', () => {
          if (this.currWindow) {
            this.currWindow.close();
          }
          this.currWindow = infoWindow;
          infoWindow.open(map, marker);
        });
      });
    }
    if ('HISTORY' === this.mapType) {
      this.initTrackingMap(map);
    }
  }

  initTrackingMap(map) {
    console.log(this.polylinePoints);
    this.currPolyline = new google.maps.Polyline({
      path: this.polylinePoints,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    this.currPolyline.setMap(map);
  }

  OnDestroy() {
    // remove polyline
    if (this.currPolyline) {
      this.currPolyline.setMap(null);
    }
  }
}
