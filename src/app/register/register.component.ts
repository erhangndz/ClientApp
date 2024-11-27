import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  model:any= {};

  error:any= [];

  constructor(private authService: AuthService) {


  }


  register(){

this.authService.register(this.model).subscribe(()=>{
  console.log("User Registered");
}, error=>{
  this.error=error.error;
})


  }

}
