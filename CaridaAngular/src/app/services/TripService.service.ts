import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.module';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  trips:Trip[];

constructor() { }


addTrip(trip:Trip){
  this.trips.push(trip);
}

findTrip(trip:Trip): Trip | undefined{
  return this.trips.find(TripToFind => TripToFind.start == trip.start && TripToFind.finish == trip.finish);
}

}
