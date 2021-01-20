import {RecipeModel} from "../../models/recipe.model";
import * as meals from "../../../mocks/recipes.json";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private meals = meals['recipes'];
  private meal: RecipeModel;

  constructor() {
  }

  getMeals(origin?: string) {
    if (origin) {
      return this.meals.filter(meal => {
        return meal.origin === origin;
      });
    } else {
      return this.meals;
    }
  }

  getRecipe(name: string) {
    this.meals.forEach(element => {
      if (element.name === name) {
        this.meal = element;
      }
    });
    return this.meal;
  }
}
