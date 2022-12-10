import { User } from "./user.module";

export class Trip{

  start?:string;
  finish?:string;
  price?:number;
  date?:String;
  hour?:String;
  driver?:User;
  freeSeats:Number;
  occupiedSeats:Number;

  //maybe we will add the cords in the future, not now.

  constructor(start:string, finish:string, price:number, date:String, hour:String, driver:User, freeSeats:Number, occupiedSeats:Number){
    this.start = start;
    this.finish = finish;
    this.price = price;
    this.date = date;
    this.hour = hour;
    this.driver = driver;
    this.freeSeats = freeSeats;
    this.occupiedSeats = occupiedSeats;
  }
}
