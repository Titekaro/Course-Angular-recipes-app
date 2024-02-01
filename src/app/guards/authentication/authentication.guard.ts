import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard  {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*We subscribe to our service to check if we got a user, but to emit data only once, we will use the take(1) method*/
    return this.authenticationService.user.pipe(take(1), map(user => {
      const isAuthenticated = !!user;
      if (!isAuthenticated) {
        return true;
      } else {
        return this.router.createUrlTree(['/']);
      }
    }));
  }
}
