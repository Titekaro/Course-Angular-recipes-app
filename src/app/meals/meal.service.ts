import {EventEmitter} from "@angular/core";

import {MealItem} from "./meal.model";

export class MealService {
  // We define our array with our datas for meals, using the meal model.
  private meals: MealItem[] = [
    new MealItem('Chili Con Carne', './assets/images/mexican/chili-con-carne.jpg', 45, [
      '6 Patates douces',
      '600g de boeuf haché',
      '400g Tomate concassée en conserve',
      '400g Haricot rouge en boîte',
      '1 Oignon',
      '2 Piments rouges',
      '1 Gousse d\'ail',
      '1/2 bouquet Coriandre',
      '8 c. à s. Huile d\'olive',
      '1 c. à c. Cumin',
      '150g Crème fraîche épaisse',
      'Sel et poivre'
    ]),
    new MealItem('Tuna Poke Tacos', './assets/images/mexican/tuna-tacos.jpg', 40, ['quatre', 'cinq', 'six']),
    new MealItem('Kimchi & Bulgogi nachos', './assets/images/mexican/kimchi-nachos.jpg', 25, ['sept', 'huit'])
  ];

  // We define an eventEmitter for when we select a meal (MealItem).
  selectedMeal = new EventEmitter<MealItem>();

  constructor() { }

  // We return our array of meals
  getMeals() {
    return this.meals.slice();
  }
}
