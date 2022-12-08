import { Injectable } from '@angular/core';
import { User } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  public static users:User[] = [];
  public static loged:boolean = false;
  public static userLoged: User | undefined;

constructor() { }

addUser(user:User){
  console.log("users:");
  UsersServiceService.users.push(user);
  console.log(UsersServiceService.users)
}

showUsers():void{
  console.log("UsersServiceService.users");
  console.log(UsersServiceService.users);
}

userExist(user:User): boolean{
  return UsersServiceService.users.includes(user);
}

findUser(user:User): User | undefined{
  return UsersServiceService.users.find(userToFind => userToFind.email == user.email && userToFind.password == user.password);
}

isLoged():boolean{
  return UsersServiceService.loged;
}

userThatIsLoged():User | undefined{
  return UsersServiceService.userLoged;
}

userHasJustLoged(user:User|undefined):void{
  UsersServiceService.loged=true;
  UsersServiceService.userLoged = user;
}

}
