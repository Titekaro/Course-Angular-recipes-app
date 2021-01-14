import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  adminMode = new Subject<boolean>();

  constructor(private route: Router) {
  }

  onSignIn() {
    localStorage.setItem('adminMode', 'true');
    this.adminMode.next(true);
    this.route.navigate(['/dashboard']);
  }

  onSignOut() {
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
