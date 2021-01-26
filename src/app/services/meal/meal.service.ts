import {RecipeModel} from "../../models/recipe.model";
import * as meals from "../../../mocks/recipes.json";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private meals = meals['recipes'];
  private meal: RecipeModel;
  mealsChanged = new Subject<RecipeModel[]>();

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
    this.meals.forEach(meal => {
      if (meal.name === name) {
        this.meal = meal;
      }
    });
    return this.meal;
  }

  addRecipe(recipe: RecipeModel) {
    this.meals.push(recipe);
    this.mealsChanged.next(this.meals);
  }

  updateRecipe(name: string, recipe: RecipeModel) {
    const mealIndex = this.meals.findIndex(meal => {
      return meal.name === name;
    });
    this.meals[mealIndex] = recipe;
    this.mealsChanged.next(this.meals);
  }
}
