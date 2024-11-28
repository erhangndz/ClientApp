import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SocialApp';
  jwtHelper = new JwtHelperService();


  constructor(private authService:AuthService) {

    const token = localStorage.getItem("token");
    if(token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

}
