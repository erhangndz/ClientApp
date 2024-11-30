import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokenModel } from '../_models/tokenModel';
import { jwtDecode } from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl: string = "https://localhost:5001/api/auth/";


jwtHelper = new JwtHelperService();
decodedToken :any;

  constructor(private http: HttpClient) { }



  login(model){
return this.http.post(this.baseUrl+"login",model).pipe(

  map((response:any) => {
    if(response){

      localStorage.setItem("token",response.token);

    }

  })
);
  }


  register(model){

    return this.http.post(this.baseUrl+"register",model);

  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
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



}


