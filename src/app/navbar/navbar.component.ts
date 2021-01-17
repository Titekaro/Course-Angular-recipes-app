import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../services/authentication/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  adminMode: boolean = false;
  adminModeSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.adminModeSubscription = this.authenticationService.user.subscribe(user => {
      this.adminMode = !!user;
    });
  }

  ngOnDestroy() {
    this.adminModeSubscription.unsubscribe();
  }

  signOut() {
    this.authenticationService.signOut();
  }
}
