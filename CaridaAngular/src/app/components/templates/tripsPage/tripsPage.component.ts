import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.module';
import { User } from 'src/app/models/user.module';
import { TripServiceService } from 'src/app/services/TripService.service';

@Component({
  selector: 'app-tripsPage',
  templateUrl: './tripsPage.component.html',
  styleUrls: ['./tripsPage.component.css']
})
export class TripsPageComponent implements OnInit {

  trips:Trip[];

  constructor(private tripService:TripServiceService) { }

  ngOnInit() {

    this.trips = this.tripService.getTrips();
    //comparar todos los trips y quitar los que coinciden con el de la persona logeada 
  }

}
