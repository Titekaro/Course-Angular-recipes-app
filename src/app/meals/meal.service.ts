import {EventEmitter} from "@angular/core";

import {MealItem} from "./meal.model";

export class MealService {
  // We define our array with our datas for meals, using the meal model.
  private meals: MealItem[] = [
    new MealItem('Chili Con Carne', './assets/images/mexican/chili-con-carne.jpg', 45),
    new MealItem('Tuna Poke Tacos', './assets/images/mexican/tuna-tacos.jpg', 40),
    new MealItem('Kimchi & Bulgogi nachos', './assets/images/mexican/kimchi-nachos.jpg', 25)
  ];

  // We define an eventEmitter for when we select a meal (MealItem).
  selectedMeal = new EventEmitter<MealItem>();

  constructor() { }

  // We return our array of meals
  getMeals() {
    return this.meals.slice();
  }
}
