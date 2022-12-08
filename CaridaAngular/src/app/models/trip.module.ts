export class Trip{

  start?:string;
  finish?:string;
  price?:number;
  date?:Date;
  hour?:Date;

  //maybe we will add the cords in the future, not now.

  contructor(start:string, finish:string){
    this.start = start;
    this.finish = finish;
  }
}
