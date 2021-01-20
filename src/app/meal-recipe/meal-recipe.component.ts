import {Component, OnInit} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute, Params} from "@angular/router";
import {MealService} from "../services/meal/meal.service";

@Component({
  selector: 'app-meal-recipe',
  templateUrl: './meal-recipe.component.html',
  styleUrls: ['./meal-recipe.component.scss']
})
export class MealRecipeComponent implements OnInit {
  meal: RecipeModel;
  mealName: string;
  mealCategory: string;

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mealCategory = params['category'];
      this.mealName = params['name'];
      this.meal = this.mealService.getRecipe(this.mealName);
    });
  }
}
