import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { AuthService } from "../_services/auth.service";
import { catchError } from "rxjs";
import { Observable , of } from "rxjs";


@Injectable()

export class MemberEditResolver implements Resolve<User> {

constructor(private userService:UserService,
            private alertify: AlertifyService,
            private authService: AuthService,
            private route: Router
){}



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.getUserById(this.authService.decodedToken.nameid)
    .pipe(catchError(error=>{
      this.alertify.error(error);
      this.route.navigate([""]);
      return of(null);
    }

    ))
  }


}
