import { Component, OnInit } from '@angular/core';
import {MealService} from "../meal.service";
import {MealItem} from "../meal.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  // The list needs our meals
  meals: { greek: MealItem[]; italian: MealItem[]; mexican: MealItem[] };
  mealType: string;

  // We call our service that contains the meals datas
  constructor(private mealService: MealService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.mealType = this.route.snapshot.params['type'];

    this.route.params.subscribe((params: Params) => {
      this.mealType = params['type'];
    });

    // We tell that our array of meals is equal to the initialised array of meals on our service, selected by the meal type.
    this.meals = this.mealService.getMeals();
  }

}
