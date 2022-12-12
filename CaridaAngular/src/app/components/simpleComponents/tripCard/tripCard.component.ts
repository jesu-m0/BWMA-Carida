import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MapDirectionsService, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { map, Observable } from 'rxjs';
import { Trip } from 'src/app/models/trip.module';
import { User } from 'src/app/models/user.module';
import { TripServiceService } from 'src/app/services/TripService.service';
import { UsersServiceService } from 'src/app/services/UsersService.service';

@Component({
  selector: 'app-tripCard',
  templateUrl: './tripCard.component.html',
  styleUrls: ['./tripCard.component.css']
})
export class TripCardComponent implements OnInit {

  @Input() trip:Trip;
  @Input() booked:Boolean;
  yours:Boolean;
  drivername:String;
  dateStr:String;
  hourStr:String;

  //map variables
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 50.555809, lng: 9.680845};
  zoom = 6;
  display: any;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  directionsResults$: Observable<google.maps.DirectionsResult|undefined>;

  constructor(private tripService:TripServiceService, private userService:UsersServiceService, private mapDirectionsService: MapDirectionsService) {

   }

  ngOnInit() {
    if(this.trip.driver?.name === undefined){
      this.drivername = "user_name";
    }else{
      this.drivername = this.trip.driver.name;
    }

    if(this.trip.date === undefined){
      this.dateStr = "Invalid Date";
      this.hourStr = "Invalid Hour";
    }else{
      this.dateStr = this.trip.date.getDate() + "/" + (this.trip.date.getMonth()+1) + "/" + this.trip.date.getFullYear();
      this.hourStr = this.trip.date.getHours() + ":" + this.trip.date.getMinutes();
    }

    this.center = {lat: (this.trip.startLatitude) ? this.trip.startLatitude : 0,
                    lng: (this.trip.startLongitude) ? this.trip.startLongitude : 0};

    this.markerPositions.push(
      {lat: (this.trip.startLatitude) ? this.trip.startLatitude : 0,
        lng: (this.trip.startLongitude) ? this.trip.startLongitude : 0},
      {lat: (this.trip.finishLatitude) ? this.trip.finishLatitude : 0,
        lng: (this.trip.finishLongitude) ? this.trip.finishLongitude : 0}
      );

      const request: google.maps.DirectionsRequest = {
        destination: {lat: (this.trip.finishLatitude) ? this.trip.finishLatitude : 0,
                      lng: (this.trip.finishLongitude) ? this.trip.finishLongitude : 0},
        origin: {lat: (this.trip.startLatitude) ? this.trip.startLatitude : 0,
                      lng: (this.trip.startLongitude) ? this.trip.startLongitude : 0},
        travelMode: google.maps.TravelMode.DRIVING
      };
      this.directionsResults$ = this.mapDirectionsService.route(request)
      .pipe(map(response => response.result));

      let userLoged:User | undefined;
      userLoged = this.userService.userThatIsLoged();
      if(userLoged?.email == this.trip.driver?.email && userLoged?.password == this.trip.driver?.password){
        this.yours = true;
      }
  }

  book(){
    //añadirlo a los trips de la persona, y en la pagina de todos los trips hacer que si los totales hay alguno que coincida con el de la persona que no se muestre
    this.trip.freeSeats = +this.trip.freeSeats! - 1;
    this.trip.occupiedSeats = +this.trip.occupiedSeats! + 1;
    this.userService.addTripToUserLoged(this.trip);
  }

  cancel(){
    this.trip.freeSeats = +this.trip.freeSeats! + 1;
    this.trip.occupiedSeats = +this.trip.occupiedSeats! - 1;
    this.userService.removeTripFromUserLoged(this.trip);
  }

  //map functions

  openInfoWindow(marker: MapMarker) {
    if(this.infoWindow != undefined)
    this.infoWindow.open(marker);
    this.display = marker.getPosition()?.toJSON();
  }

  public onOpenModal(): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    button.setAttribute('data-bs-target', '#showMarkPointsModal' + this.trip.id);

    container?.appendChild(button);
    button.click();
  }


}
