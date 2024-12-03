import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {

users: User[];
constructor(private userService: UserService,
            private alertify: AlertifyService
){

}

ngOnInit(){
  this.getUsers();
}


getUsers(){
  this.userService.getUsers().subscribe(result=>
this.users = result
  ,error=>
    this.alertify.error(error)
  )
}

}
