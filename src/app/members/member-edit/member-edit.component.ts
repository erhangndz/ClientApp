import { Component } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'member-edit',
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent {
user:  User;

constructor(private route:ActivatedRoute,
            private userService: UserService,
            private authService:AuthService,
            private alertify: AlertifyService
){
this.route.data.subscribe(data=>{
  this.user= data['user'];
}
)
}



updateUser(){

this.userService.updateUser(this.authService.decodedToken.nameid,this.user).subscribe(()=>
  this.alertify.success("profile updated"),
error=> this.alertify.error(error.statusText))

}



}
