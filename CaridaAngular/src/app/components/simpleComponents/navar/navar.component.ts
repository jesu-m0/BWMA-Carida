import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UsersServiceService } from 'src/app/services/UsersService.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent implements OnInit {

  isLoged:boolean;
  userLoged?:User;

  constructor(private userService:UsersServiceService, private router:Router) { }

  ngOnInit() {
    this.checkIfUserIsLoged();
  }

  checkIfUserIsLoged(){
    this.isLoged = this.userService.isLoged();
    console.log(this.isLoged)
    if(this.isLoged){
      this.userLoged = this.userService.userThatIsLoged();
    }
    console.log('User loged: ' + this.isLoged);
  }

  checkIfUserIsLoged2(){
    this.isLoged = true;
    this.userLoged = new User();
    this.userLoged.email = 'john@gmail.com';
    this.userLoged.password = '1234';
    this.userLoged.name = 'John Warren';


    console.log('User loged: ' + this.isLoged);
  }

  checkIfUserIsLogedIndex(){
    this.isLoged = this.userService.isLoged();
    console.log(this.isLoged)
    if(this.isLoged){
      this.userLoged = this.userService.userThatIsLoged();
    }
    console.log('User loged: ' + this.isLoged);
    this.router.navigate(['/']);
  }

}
