import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  model:any= {};

  error:any= [];

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router
  ) {


  }


  register(){

this.authService.register(this.model).subscribe(()=>{
  this.alertify.success("User Registered");
  this.router.navigate([""]);
}, error=>{
  this.error=error.error;
})


  }

}
