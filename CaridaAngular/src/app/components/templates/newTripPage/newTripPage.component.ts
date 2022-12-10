import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip.module';
import { TripServiceService } from 'src/app/services/TripService.service';
import { UsersServiceService } from 'src/app/services/UsersService.service';
import { GeocoderResponse } from 'src/app/models/geocoder-response.module';
import { GeocodingService } from 'src/app/services/Geocoding.service';

@Component({
  selector: 'app-newTripPage',
  templateUrl: './newTripPage.component.html',
  styleUrls: ['./newTripPage.component.css']
})
export class NewTripPageComponent implements OnInit {

  newtrip:Trip = new Trip();
  dateStr:String;
  hourStr:String;
  places:number;

  constructor(private tripService:TripServiceService, private router:Router, private userService:UsersServiceService, private geocodingService: GeocodingService) { }

  ngOnInit(): void {
  }

  createTrip(){

    this.newtrip.date = new Date();

    //With that we put the day of the trip
    let dateSplit;
    dateSplit = this.dateStr.split("-");
    this.newtrip.date?.setFullYear(parseFloat(dateSplit[0]));
    this.newtrip.date?.setMonth(parseFloat(dateSplit[1])-1);
    this.newtrip.date?.setDate(parseFloat(dateSplit[2]));

    let hourSplit = this.hourStr.split(":");
    this.newtrip.date.setHours(parseFloat(hourSplit[0]));
    this.newtrip.date.setMinutes(parseFloat(hourSplit[1]));
    console.log(this.newtrip.date);

    this.newtrip.driver = this.userService.userThatIsLoged();

    this.newtrip.freeSeats = this.places-1;
    this.newtrip.occupiedSeats = 1;
    this.tripService.addTrip(this.newtrip);
    this.router.navigate(['/trips']);
  }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 50.555809, lng: 9.680845};
  markerPosition: google.maps.LatLngLiteral = {lat: 50.555809, lng: 9.680845};
  zoom = 4.5;
  display: any;
  startingPoint: string = "";

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPosition = event.latLng.toJSON();
    if (this.infoWindow != undefined)
    this.infoWindow.close();
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

  public saveStartingPoint(): void {

    this.geocodingService.geocodeLatLng(this.markerPosition).then((response: GeocoderResponse) => {
      if (response.status === 'OK' && response.results?.length) {
        this.startingPoint = response.results[0].formatted_address;
        console.log(this.startingPoint);
      } else {
        window.alert('No results found');
      }
    });

  }

}
