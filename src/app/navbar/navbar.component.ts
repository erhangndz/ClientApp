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
}, result=>{
  console.log(result.error);
});


  }

  loggedIn(){
    return this.authService.loggedIn();


  }

  logout(){
    localStorage.removeItem("token");
    console.log("logout success");
    this.router.navigate(['']);
  }


  getNameSurname() {
    const token = localStorage.getItem("token");
   this.tokenModel = jwtDecode(token);
   return this.tokenModel.nameSurname;

  }

}
