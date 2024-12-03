import { Component } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent {

  user: User;

  constructor(private userService:UserService,
              private alertify : AlertifyService,
              private route : ActivatedRoute
  ){
    this.getUser();
  }


  getUser(){
    this.userService.getUserById(+this.route.snapshot.params["id"]).subscribe(user=>this.user=user,
      error=> this.alertify.error(error)
    )
  }
}
