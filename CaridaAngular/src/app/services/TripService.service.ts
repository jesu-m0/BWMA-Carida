import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.module';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  trips: Trip[] = [
    {
      "id": 1,
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
      "occupiedSeats":3,
      "startLatitude": 49.9667,
      "startLongitude": 7.2667,
      "finishLatitude": 50.033333,
      "finishLongitude": 8.570556
    },
    {
      "id": 2,
      "start": "Fulda",
      "finish": "Frankfurt",
      "price": 7,
      "date": new Date(2022,11,28,15,30),
      "driver":
      {
        "email": "luka.modric@gmail.com",
        "password" : "cr7thebest",
        "name": "Toni Kroos"
      },
      "freeSeats":3,
      "occupiedSeats":2,
      "startLatitude": 50.55427,
      "startLongitude": 9.6819813,
      "finishLatitude": 50.1109622,
      "finishLongitude": 8.6218121
    },
    {
      "id": 3,
      "start": "Fulda Hochschule",
      "finish": "Fulda Aschenberg",
      "price": 0.5,
      "date": new Date(2023,0,10,7,45),
      "driver":
      {
        "email": "luka.modric@gmail.com",
        "password" : "cr7thebest",
        "name": "Michael Jackson"
      },
      "freeSeats":1,
      "occupiedSeats":4,
      "startLatitude": 50.5640738,
      "startLongitude": 9.6860573,
      "finishLatitude": 50.5742573,
      "finishLongitude": 9.649818
    },
    { 
      "id": 4,
      "start": "Fulda ZOB",
        "finish": "Paris",
        "price": 230,
        //new Date ( year, month, date[, hour, minute, second, millisecond ]):
        "date": new Date(2022,2,3,8,30),
        "driver":
        {
          "email": "luka.modric@gmail.com",
          "password" : "cr7thebest",
          "name": "Luka Modric"
        },
        "freeSeats":2,
        "occupiedSeats":3,
        "startLatitude": 50.5640738,
        "startLongitude": 9.6860573,
        "finishLatitude": 48.8588336,
        "finishLongitude": 2.2769952
      }
  ];

  singleID: number = 5;

constructor() { }

addTrip(trip:Trip){
  trip.id = this.singleID;
  this.singleID++;
  this.trips.push(trip);
}

findTrip(trip:Trip): Trip | undefined{
  return this.trips.find(TripToFind => TripToFind.start == trip.start && TripToFind.finish == trip.finish);
}

getTrips(): Trip[]{
  return this.trips;
}

}
