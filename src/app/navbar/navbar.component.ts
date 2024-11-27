import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { TokenModel } from '../_models/tokenModel';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

model:any = {};
tokenModel : any ={};

constructor(private authService: AuthService,
            private router: Router
){}


  login(){

this.authService.login(this.model).subscribe(response=>{
  this.router.navigate(['/members']);
});


  }

  loggedIn(){
    const token = localStorage.getItem("token");

    return token ? true: false;


  }

  logout(){
    localStorage.removeItem("token");
    console.log("logout success");
    this.router.navigate(['']);
  }

  getDecodedAccessToken(): TokenModel {
    try {
      const token = localStorage.getItem("token");
      console.log(jwtDecode(token));
      return jwtDecode(token);

    } catch(Error) {
      return null;
    }
  }

  getNameSurname()  {
    const token = localStorage.getItem("token");
let decodedToken = jwtDecode(token);
this.tokenModel = decodedToken;
return this.tokenModel.nameSurname;

  }

}
