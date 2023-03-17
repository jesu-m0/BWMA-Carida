import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.module';
import { User } from 'src/app/models/user.module';
import { TripServiceService } from 'src/app/services/TripService.service';
import { UsersServiceService } from 'src/app/services/UsersService.service';

@Component({
  selector: 'app-tripsPage',
  templateUrl: './tripsPage.component.html',
  styleUrls: ['./tripsPage.component.css']
})
export class TripsPageComponent implements OnInit {

  trips:Trip[];

  constructor(private tripService:TripServiceService, private userService:UsersServiceService) { }

  ngOnInit() {

    this.trips = this.tripService.getTrips();
    let allTrips = this.trips;
    //comparar todos los trips y quitar los que coinciden con el de la persona logeada
    // Compare all the trips and remove the ones 
    console.log("alltrips:")
    console.log(allTrips)
    console.log("userTrips:")
    let userTrips = this.userService.getUserTrips();
    console.log(userTrips)

    //Devuelve la lista sin el trip deseado
    let removeTrip = (removeTrip:Trip) => {
      const res = allTrips.filter(obj => obj.start != removeTrip.start || obj.finish != removeTrip.finish
        || obj.date?.getDate() != removeTrip.date?.getDate()
        || obj.date?.getMonth() != removeTrip.date?.getMonth()
        || obj.date?.getFullYear() != removeTrip.date?.getFullYear());
      return res;
    }

    for(let trip of userTrips){
      let e = allTrips.find(tripToFind => tripToFind.start == trip.start && tripToFind.finish == trip.finish
        && tripToFind.date?.getDate()==trip.date?.getDate()
        && tripToFind.date?.getMonth()==trip.date?.getMonth()
        && tripToFind.date?.getFullYear()==trip.date?.getFullYear());
      console.log(e != null);
      if(e != null){
        allTrips = removeTrip(trip);
        console.log(allTrips)
      }
    }

    this.trips = allTrips;
  }

}
