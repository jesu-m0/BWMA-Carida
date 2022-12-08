import { Injectable } from '@angular/core';
import { User } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users:User[] = [];

constructor() { }

addUser(user:User){
  console.log("users:");
  this.users.push(user);
  console.log(this.users)
}

findUser(user:User): User | undefined{
  return this.users.find(userToFind => userToFind.email == user.email && userToFind.password == user.password);
}



}
