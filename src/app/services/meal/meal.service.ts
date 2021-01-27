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
    const mealIndex = this.getMealIndex(name);
    return this.meal = this.meals[mealIndex];
  }

  addRecipe(recipe: RecipeModel) {
    this.meals.push(recipe);
    this.mealsChanged.next(this.meals);
  }

  updateRecipe(name: string, recipe: RecipeModel) {
    const mealIndex = this.getMealIndex(name);
    this.meals[mealIndex] = recipe;
    this.mealsChanged.next(this.meals);
  }

  removeRecipe(name: string) {
    const mealIndex = this.getMealIndex(name);
    this.meals.splice(mealIndex, 1);
    this.mealsChanged.next(this.meals);
  }

  private getMealIndex(name: string) {
    return this.meals.findIndex(meal => {
      return meal.name === name;
    });
  }
}
