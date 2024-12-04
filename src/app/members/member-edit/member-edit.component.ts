import { Component } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'member-edit',
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent {
user:  User;

constructor(private userService:UserService,
            private alertify: AlertifyService,
            private authService:AuthService
){
  this.getUser();
}


getUser(){
this.userService.getUserById(this.authService.decodedToken.nameid).subscribe(user=>
  this.user=user,
  err=>this.alertify.error(err)
)
}



}
