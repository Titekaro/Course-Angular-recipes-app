import { Component, OnInit } from '@angular/core';
import {MealService} from "../meal.service";
import {MealItem} from "../meal.model";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  // The list needs our meals
  meals: MealItem[];

  // We call our service that contains the meals datas
  constructor(private mealService: MealService) { }

  ngOnInit() {
    // We tell that our array of meals is equal to the initialised array of meals on our service.
    this.meals = this.mealService.getMeals();
  }

}
