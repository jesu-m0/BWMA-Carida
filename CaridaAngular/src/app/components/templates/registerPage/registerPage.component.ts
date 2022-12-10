import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UsersServiceService } from 'src/app/services/UsersService.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-registerPage',
  templateUrl: './registerPage.component.html',
  styleUrls: ['./registerPage.component.css']
})
export class RegisterPageComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UsersServiceService, private router:Router) { }

  ngOnInit() {
  }

  createUser():void{
    console.log(this.user);
    this.userService.addUser(this.user);
    this.router.navigate(['/login']);
  }

}
