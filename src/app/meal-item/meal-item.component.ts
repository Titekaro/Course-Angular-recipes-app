import {Component, Input} from '@angular/core';

import {MealItem} from "../models/meal.model";

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {
  @Input() mealItem: MealItem;

  constructor() {
  }
}
