import { Trip } from "./trip.module";

export class User{

  name?:string;
  email?:string;
  password?:string;
  trips?:Trip[];

  constructor(email?:string, password?:string, name?:string, trips?:Trip[]){
    this.email = email;
    this.password = password;
    this.name = name;
    this.trips = trips;
  }
}
