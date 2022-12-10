import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.module';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  trips: Trip[] = [
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
        "name": "Toni Kroos"
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
        "name": "Michael Jackson"
      },
      "freeSeats":1,
      "occupiedSeats":4
    },
    {"start": "Fulda ZOB",
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
        "occupiedSeats":3
      }
  ];

constructor() { }

addTrip(trip:Trip){
  this.trips.push(trip);
}

findTrip(trip:Trip): Trip | undefined{
  return this.trips.find(TripToFind => TripToFind.start == trip.start && TripToFind.finish == trip.finish);
}

getTrips(): Trip[]{
  return this.trips;
}

}
