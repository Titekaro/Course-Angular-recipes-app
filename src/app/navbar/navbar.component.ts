import {Component, OnDestroy, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  adminMode: boolean = false;
  adminModeSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.adminModeSubscription = this.userService.adminMode.subscribe((adminMode: boolean) => {
      this.adminMode = adminMode;
    });
    this.adminMode = !!localStorage.getItem('adminMode');
  }

  ngOnDestroy() {
    this.adminModeSubscription.unsubscribe();
  }

  signOut() {
    this.adminMode = false;
    this.userService.onSignOut();
  }
}
