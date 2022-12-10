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
    this.trips=[
      {
        "start": "Hahn",
        "finish": "Flughafen Frankfurt",
        "price": 15,
        //new Date ( year, month, date[, hour, minute, second, millisecond ]):
        "date": new Date(2022,11,25,8,30),
        "driver":
        {
          "email": "luka.modric@gmail.com",
          "password" : "cr7thebest",
          "name": "Luka Modric"
        },
        "freeSeats":2,
        "occupiedSeats":3
      },
      {
        "start": "Fulda",
        "finish": "Frankfurt",
        "price": 7,
        "date": new Date(2022,11,28,15,30),
        "driver":
        {
          "email": "luka.modric@gmail.com",
          "password" : "cr7thebest",
          "name": "Luka Modric"
        },
        "freeSeats":3,
        "occupiedSeats":2
      },
      {
        "start": "Fulda Hochschule",
        "finish": "Fulda Aschenberg",
        "price": 0.5,
        "date": new Date(2023,0,10,7,45),
        "driver":
        {
          "email": "luka.modric@gmail.com",
          "password" : "cr7thebest",
          "name": "Luka Modric"
        },
        "freeSeats":1,
        "occupiedSeats":4
      }
    ]

    this.trips = this.tripService.getTrips();
  }

}
