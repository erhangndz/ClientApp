import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models/user";

@Injectable({
  providedIn:"root"
})


export class UserService  {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+ localStorage.getItem("token")
    }, )
  }


constructor(private http: HttpClient) {}

baseUrl: string = "https://localhost:5001/api/users/";





getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl);
}

getUserById(id:number): Observable<User> {
  return this.http.get<User>(this.baseUrl +id);
}

updateUser(id:number,user:User){
return this.http.put(this.baseUrl+ id,user);
}

}
