import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UsersServiceService } from 'src/app/services/UsersService.service';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  user:User = new User();
  userFinded?:User;

  constructor(private userService:UsersServiceService) { }

  ngOnInit() {
    console.log("Sowing users: ");
    this.userService.showUsers;
  }

  findUser():void{
    console.log("Sowing users: ");
    this.userService.showUsers;
    this.userFinded = this.userService.findUser(this.user);
    if(this.userFinded == undefined){
      console.log('User do not exist')
    }else{
      this.userService.userHasJustLoged(this.userFinded);
      console.log('User loged!');
      console.log(this.userFinded);
    }
  }

}
