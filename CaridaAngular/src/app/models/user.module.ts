export class User{

  name:string;
  email:string;
  password:string;

  contructor(email:string, password:string,name:string){
    this.email = email;
    this.password = password;
    this.name = name;
  }
}
