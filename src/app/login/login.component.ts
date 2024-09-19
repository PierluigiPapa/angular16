import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userID : String = "Pierluigi";
  password : String = "";

  constructor() {}

    ngOnInit() : void{
    }

    gestAuth = () : void => {
      console.log(this.userID)
    }

  }

