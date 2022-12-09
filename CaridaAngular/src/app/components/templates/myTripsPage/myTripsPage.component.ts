import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.module';

@Component({
  selector: 'app-myTripsPage',
  templateUrl: './myTripsPage.component.html',
  styleUrls: ['./myTripsPage.component.css']
})
export class MyTripsPageComponent implements OnInit {

  mytrips:Trip[];

  constructor() { }

  ngOnInit() {
    this.mytrips=[
      {
        "start": "Hahn",
        "finish": "Flughafen Frankfurt",
        "price": 15,
        //new Date ( year, month, date[, hour, minute, second, millisecond ]):
        "date": "25/12/2022",
        "hour": "15:30",
        "driverName": "Elom Musk",
        "freeSeats":2,
        "occupiedSeats":3
      },
      {
        "start": "Fulda",
        "finish": "Frankfurt",
        "price": 7,
        "date": "28/12/2022",
        "hour": "8:30",
        "driverName": "Michael Jackson",
        "freeSeats":3,
        "occupiedSeats":2
      },
      {
        "start": "Fulda Hochschule",
        "finish": "Fulda Aschenberg",
        "price": 0.5,
        "date": "25/12/2022",
        "hour": "8:00",
        "driverName": "Luka Modric",
        "freeSeats":1,
        "occupiedSeats":4
      }
    ]
  }

}
