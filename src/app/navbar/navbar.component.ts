import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../services/authentication/authentication.service";
import {MealService} from "../services/meal/meal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  adminMode: boolean = false;
  adminModeSub: Subscription;
  origins;
  originSub: Subscription;

  constructor(private authenticationService: AuthenticationService, private mealService: MealService) {
  }

  ngOnInit() {
    this.adminModeSub = this.authenticationService.user.subscribe(user => {
      this.adminMode = !!user;
    });
    this.mealService.fetchMealOriginData();
    this.originSub = this.mealService.getOrigins.subscribe(origins => {
      this.origins = origins;
    });
  }

  signOut() {
    this.authenticationService.signOut();
  }

  ngOnDestroy() {
    if (this.adminModeSub) {
      this.adminModeSub.unsubscribe();
    }
    if (this.originSub) {
      this.originSub.unsubscribe();
    }
  }
}
