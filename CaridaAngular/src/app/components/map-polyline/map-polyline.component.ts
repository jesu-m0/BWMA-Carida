import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-polyline',
  templateUrl: './map-polyline.component.html',
  styleUrls: ['./map-polyline.component.css']
})
export class MapPolylineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  //markerPositions: google.maps.LatLngLiteral[] = [];
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 13, lng: 13},
    {lat: 23, lng: 30},
  ];
  

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
  }

  

}
