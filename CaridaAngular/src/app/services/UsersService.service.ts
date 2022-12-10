import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.module';
import { User } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  public static users:User[] = [
    {
      "email":"jesusmd2000@gmail.com",
      "password":"1234",
      "name":"Jesús Moreno",
      "trips":
      [
        {"start": "Fulda ZOB",
        "finish": "Paris",
        "price": 230,
        //new Date ( year, month, date[, hour, minute, second, millisecond ]):
        "date": new Date(2022,2,3,8,30),
        "driver":
        {
          "email": "luka.modric@gmail.com",
          "password" : "cr7thebest",
          "name": "Luka Modric"
        },
        "freeSeats":2,
        "occupiedSeats":3,
        "startLatitude": 50.5640738,
        "startLongitude": 9.6860573,
        "finishLatitude": 48.8588336,
        "finishLongitude": 2.2769952
        }
      ]
    },
    {
      "email":"linten@gmail.com",
      "password":"1234",
      "name":"Luis Miguel Garcia",
      "trips":[]
    }
  ];
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

getUserTrips(): Trip[]{
  return UsersServiceService.userLoged?.trips || [];
}

addTripToUserLoged(trip:Trip): void{
  UsersServiceService.userLoged?.trips?.push(trip);
}

removeTripFromUserLoged(trip:Trip): void{

  let userTrips = UsersServiceService.userLoged?.trips || [];

  let removeTrip = (removeTrip:Trip) => {
    const res = userTrips.filter(obj => obj.start != removeTrip.start || obj.finish != removeTrip.finish
      || obj.date?.getDate() != removeTrip.date?.getDate()
      || obj.date?.getMonth() != removeTrip.date?.getMonth()
      || obj.date?.getFullYear() != removeTrip.date?.getFullYear());
    return res;
  }

  UsersServiceService.userLoged!.trips=removeTrip(trip);

}

}
