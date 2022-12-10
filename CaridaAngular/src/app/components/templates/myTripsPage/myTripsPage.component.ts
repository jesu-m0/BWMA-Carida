import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.module';
import { UsersServiceService } from 'src/app/services/UsersService.service';

@Component({
  selector: 'app-myTripsPage',
  templateUrl: './myTripsPage.component.html',
  styleUrls: ['./myTripsPage.component.css']
})
export class MyTripsPageComponent implements OnInit {

  mytrips:Trip[] | undefined;

  constructor(private userService:UsersServiceService) { }

  ngOnInit() {
    this.mytrips = this.userService.getUserTrips();
  }

}
