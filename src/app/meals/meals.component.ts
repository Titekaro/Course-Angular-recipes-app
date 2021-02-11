import {Component, OnInit} from '@angular/core';
import {MealService} from "../services/meal/meal.service";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealService]
})
export class MealsComponent implements OnInit {
  private data = false;

  constructor() {
  }

  ngOnInit() {
  }

  onData(event: any) {
    this.data = !!event.mealData;
  }
}
