import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userID : string = "Pierluigi";
  password : string = "";

  autenticato : boolean = true;
  errorMsg : string = "Spiacente, la userID e/o la password sono errati!";

  constructor() {}

    ngOnInit() : void{
    }

    gestAuth = () : void => {
      console.log(this.userID)

      if (this.userID === "Pierluigi" && this.password === "Brindisi") {
        this.autenticato = true;
      }
      else {
        this.autenticato = false;
      }
    }

  }

