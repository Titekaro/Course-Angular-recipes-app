import {Component, OnInit} from "@angular/core";
import {MealItem} from "../models/meal.model";
import {ActivatedRoute, Params} from "@angular/router";
import {MealService} from "../services/meal.service";

@Component({
  selector: 'app-meal-recipe',
  templateUrl: './meal-recipe.component.html',
  styleUrls: ['./meal-recipe.component.scss']
})
export class MealRecipeComponent implements OnInit {
  mealItem: MealItem;
  mealName: string;
  mealCategory: string;

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mealCategory = params['category'];
      this.mealName = params['name'];
      this.mealItem = this.mealService.getRecipe(this.mealCategory, this.mealName);
    });
  }
}
