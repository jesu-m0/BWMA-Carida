import { Component, OnInit, Input } from '@angular/core';
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
  drivername:String;
  dateStr:String;
  hourStr:String;

  constructor(private tripService:TripServiceService, private userService:UsersServiceService) { }

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

}
