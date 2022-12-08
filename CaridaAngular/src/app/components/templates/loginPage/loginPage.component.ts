import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  user:User;

  constructor() { }

  ngOnInit() {
  }

  findUser():void{
    
  }

}
