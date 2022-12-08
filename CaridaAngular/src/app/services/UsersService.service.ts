import { Injectable } from '@angular/core';
import { User } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users:User[] = [];
  loged:boolean = false;
  userLoged: User | undefined;

constructor() { }

addUser(user:User){
  console.log("users:");
  this.users.push(user);
  console.log(this.users)
}

showUsers():void{
  console.log("this.users");
  console.log(this.users);
}

userExist(user:User): boolean{
  return this.users.includes(user);
}

findUser(user:User): User | undefined{
  return this.users.find(userToFind => userToFind.email == user.email && userToFind.password == user.password);
}

isLoged():boolean{
  return this.loged;
}

userThatIsLoged():User | undefined{
  return this.userLoged;
}

userHasJustLoged(user:User|undefined):void{
  this.loged=true;
  this.userLoged = user;
}

}
