import { Component, Input } from '@angular/core';

import {MealItem} from "../../meal.model";
import {MealService} from "../../meal.service";

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {
  @Input() mealItem: MealItem;

  constructor(private mealService: MealService) {

  }

  onSelectedMeal() {
    console.log('was selected');
    // On passe le mealItem sélectionné à notre service.
    this.mealService.selectedMeal.emit(this.mealItem);
  }

}
