import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
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
  mealChangedSub: Subscription;
  isLoading: boolean;
  isLoadingSub: Subscription;
  @Output() mealData = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mealOrigin = params['origin'];
      this.mealData.emit(true);
      this.meals = this.mealService.getMeals(this.mealOrigin);
    });

    this.isLoadingSub = this.mealService.isLoading.subscribe((value: boolean) => {
      this.isLoading = value;
    });
    this.mealChangedSub = this.mealService.mealsChanged.subscribe((meals: RecipeModel[]) => {
      this.meals = meals;
    });
  }

  ngOnDestroy() {
    if (this.mealChangedSub) {
      this.mealChangedSub.unsubscribe();
    }
    if (this.isLoadingSub) {
      this.isLoadingSub.unsubscribe();
    }
  }

}
