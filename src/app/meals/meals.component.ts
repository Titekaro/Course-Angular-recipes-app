import { Component, OnInit } from '@angular/core';
import {MealService} from "./meal.service";
import {MealItem} from "./meal.model";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealService]
})
export class MealsComponent implements OnInit {
  // It's the property of our condition that we have in meals.component.html to show or hide meal recipe
  mySelectedMeal: MealItem;

  constructor(private mealService: MealService) { }

  ngOnInit() {
    // On va chercher l'eventEmitter déclaré dans notre service et qui fait référence à un mealItem. Et on déclare que le mealItem sélectionné est celui récupéré via le service.
    this.mealService.selectedMeal.subscribe((mealItem: MealItem) => {
      this.mySelectedMeal = mealItem;
    })
  }

}
