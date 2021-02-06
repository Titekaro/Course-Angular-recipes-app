import {Component, OnInit} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute} from "@angular/router";
import {MealService} from "../services/meal/meal.service";

@Component({
  selector: 'app-meal-recipe',
  templateUrl: './meal-recipe.component.html',
  styleUrls: ['./meal-recipe.component.scss']
})
export class MealRecipeComponent implements OnInit {
  meal: RecipeModel;

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.meal = this.route.snapshot.data['meal'];
  }
}
