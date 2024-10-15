import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userID : string = "";
  password : string = "";

  autenticato : boolean = true;
  errorMsg : string = "Spiacente, la userID e/o la password sono errati!";
  okMsg : string = "Accesso consentito";
  titolo : string = "Accesso & autenticazione";
  sottotitolo: string = "Inserisci il nome utente e la password";

  constructor(private route: Router, private BasicAuth : AuthappService) {}

    ngOnInit() : void{
    }

    gestAuth = () : void => {
      console.log(this.userID)

      if (this.BasicAuth.autentica(this.userID, this.password)) {
        this.route.navigate (['welcome', this.userID]);
        this.autenticato = true;
      }
      else {
        this.autenticato = false;
      }
    }
}

