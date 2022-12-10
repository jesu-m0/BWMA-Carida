import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.module';
import { User } from 'src/app/models/user.module';

@Component({
  selector: 'app-tripsPage',
  templateUrl: './tripsPage.component.html',
  styleUrls: ['./tripsPage.component.css']
})
export class TripsPageComponent implements OnInit {

  trips:Trip[];

  constructor() { }

  ngOnInit() {
    this.trips=[
      {
        "start": "Hahn",
        "finish": "Flughafen Frankfurt",
        "price": 15,
        //new Date ( year, month, date[, hour, minute, second, millisecond ]):
        "date": "25/12/2022",
        "hour": "15:30",
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
        "date": "28/12/2022",
        "hour": "8:30",
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
        "date": "25/12/2022",
        "hour": "8:00",
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
  }

}
