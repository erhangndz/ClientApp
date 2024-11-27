import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl: string = "https://localhost:5001/api/users/";


  constructor(private http: HttpClient) { }



  login(model){
return this.http.post(this.baseUrl+"login",model).pipe(

  map((response:any) => {
    if(response){
      console.log(response);
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
    return token ? true: false;
  }




}
