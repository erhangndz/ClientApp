import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { TokenModel } from '../_models/tokenModel';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

model:any = {};
tokenModel : any ={};

constructor(private authService: AuthService,
            private router: Router,
            private alertify: AlertifyService
){}


  login(){

this.authService.login(this.model).subscribe(response=>{
  this.alertify.success("Login Success!");
  this.router.navigate(['/members']);
}, error=>{
  this.alertify.error(error.error);
});


  }

  loggedIn(){
    return this.authService.loggedIn();


  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['']);
    this.alertify.warning("Logout Success!");
  }


  getNameSurname() {
    const token = localStorage.getItem("token");
   this.tokenModel = jwtDecode(token);
   return this.tokenModel.nameSurname;

  }

}
