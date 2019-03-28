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
  meals: MealItem[];
  mealsType: {type: string};

  // We call our service that contains the meals datas
  constructor(private mealService: MealService, private route: ActivatedRoute) { }

  ngOnInit() {
    // We tell that our array of meals is equal to the initialised array of meals on our service.
    this.meals = this.mealService.getMeals();

    this.mealsType = {
      type: this.route.snapshot.params['type']
    };
    this.route.params.subscribe((params: Params) => {
      this.mealsType.type = params['type'];
    });
  }

}
