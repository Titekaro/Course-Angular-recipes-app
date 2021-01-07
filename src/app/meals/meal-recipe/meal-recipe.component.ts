import {Component, OnInit} from "@angular/core";
import {MealItem} from "../meal.model";
import {ActivatedRoute, Params} from "@angular/router";
import {MealService} from "../meal.service";

@Component({
  selector: 'app-meal-recipe',
  templateUrl: './meal-recipe.component.html',
  styleUrls: ['./meal-recipe.component.scss']
})
export class MealRecipeComponent implements OnInit {
  mealItem: MealItem;
  recipeName: string;
  recipeType: string;

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.recipeType = params['type'];
    });
    this.route.params.subscribe((params: Params) => {
      this.recipeName = params['name'];
      this.mealItem = this.mealService.getRecipe(this.recipeType, this.recipeName);
    });
  }
}
