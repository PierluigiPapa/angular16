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
  consentito : boolean = false;
  errorMsg : string = "Spiacente, la userID e/o la password sono errati!";
  okMsg : string = "Accesso consentito";

  constructor() {}

    ngOnInit() : void{
    }

    gestAuth = () : void => {
      console.log(this.userID)

      if (this.userID === "Pierluigi" && this.password === "Brindisi") {
        this.autenticato = true;
        this.consentito = true;
      }
      else {
        this.autenticato = false;
        this.consentito = false;
      }
    }

  }

