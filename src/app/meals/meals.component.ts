import { Component, OnInit } from '@angular/core';
import {MealService} from "./meal.service";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealService]
})
export class MealsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
