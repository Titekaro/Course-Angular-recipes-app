import { Component, OnInit } from '@angular/core';
import {MealService} from "../services/meal/meal.service";
import {MealItem} from "../models/meal.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  // The list needs our meals
  meals: { greek: MealItem[]; italian: MealItem[]; mexican: MealItem[] };
  mealCategory: string;
  // We call our service that contains the meals datas
  constructor(private route: ActivatedRoute, private mealService: MealService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mealCategory = params['category'];
    });
    // We tell that our array of meals is equal to the initialised array of meals on our service, selected by the meal type.
    this.meals = this.mealService.getMeals();
  }

}
