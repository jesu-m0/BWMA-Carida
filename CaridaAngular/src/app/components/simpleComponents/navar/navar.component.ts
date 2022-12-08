import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UsersServiceService } from 'src/app/services/UsersService.service';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent implements OnInit {

  isLoged:boolean;
  userLoged?:User;

  constructor(private userService:UsersServiceService) { }

  ngOnInit() {
    //this.checkIfUserIsLoged();
    this.isLoged = true;
    this.userLoged = new User();
    this.userLoged.email = 'oscar@frio.com';
    this.userLoged.password = 'bufanda';
    this.userLoged.name = 'Oscar';
  }

  checkIfUserIsLoged(){
    this.isLoged = this.userService.isLoged();
    //if(this.isLoged)this.userLoged = this.userService.userHasJustLoged;
    console.log('User loged: ' + this.isLoged);
  }

}
