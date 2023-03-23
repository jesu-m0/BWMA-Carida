import { User } from "./user.module";

export class Trip{

  id?:number;
  start?:string;
  finish?:string;
  price?:number;
  date?:Date;
  driver?:User;
  freeSeats?:Number;
  occupiedSeats?:Number;
  startLatitude?:number;
  startLongitude?:number;
  finishLatitude?:number;
  finishLongitude?:number;

  constructor(start?:string, finish?:string, price?:number, date?:Date,
    driver?:User, freeSeats?:Number, occupiedSeats?:Number,
    startLatitude?:number, startLongitude?:number, finishLatitude?:number, 
    finishLongitude?:number){
    this.start = start;
    this.finish = finish;
    this.price = price;
    this.date = date;
    this.driver = driver;
    this.freeSeats = freeSeats;
    this.occupiedSeats = occupiedSeats;
    this.startLatitude = startLatitude;
    this.startLongitude = startLongitude;
    this.finishLatitude = finishLatitude;
    this.finishLongitude = finishLongitude;
  }

}
