import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MealService} from "../services/meal/meal.service";
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit, OnDestroy {
  @Input() editMode = false;
  meals: RecipeModel[];
  mealOrigin: string;
  mealChangedSubscription: Subscription;

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mealOrigin = params['origin'];
      this.meals = this.mealService.getMeals(this.mealOrigin);
    });

    this.mealChangedSubscription = this.mealService.mealsChanged.subscribe((meals: RecipeModel[]) => {
      this.meals = meals;
    });
  }

  ngOnDestroy() {
    this.mealChangedSubscription.unsubscribe();
  }

}
