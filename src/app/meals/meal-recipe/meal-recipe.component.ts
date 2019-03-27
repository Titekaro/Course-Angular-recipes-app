import {Component, Input} from "@angular/core";
import {MealItem} from "../meal.model";

@Component({
  selector: 'app-meal-recipe',
  templateUrl: './meal-recipe.component.html',
  styleUrls: ['./meal-recipe.component.scss']
})
export class MealRecipeComponent {
  @Input() mealItem: MealItem;
}
