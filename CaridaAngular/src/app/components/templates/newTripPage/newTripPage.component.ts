import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-newTripPage',
  templateUrl: './newTripPage.component.html',
  styleUrls: ['./newTripPage.component.css']
})
export class NewTripPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 50.555809, lng: 9.680845};
  markerPosition: google.maps.LatLngLiteral = {lat: 50.555809, lng: 9.680845};
  zoom = 4.5;
  display: any;

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPosition = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    if(this.infoWindow != undefined)
    this.infoWindow.open(marker);
    this.display = marker.getPosition()?.toJSON();
  }
  

  public onOpenModal(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'initial') {
      button.setAttribute('data-bs-target', '#addInitialMarkPointModal');
    } 
    if (mode === 'destination') {
      button.setAttribute('data-bs-target', '#addDestinationMarkPointModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
