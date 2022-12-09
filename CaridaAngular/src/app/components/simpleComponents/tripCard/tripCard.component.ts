import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/models/trip.module';
import { User } from 'src/app/models/user.module';

@Component({
  selector: 'app-tripCard',
  templateUrl: './tripCard.component.html',
  styleUrls: ['./tripCard.component.css']
})
export class TripCardComponent implements OnInit {

  @Input() trip:Trip;

  constructor() { }

  ngOnInit() {
  }

}
