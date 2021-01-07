import {MealItem} from "./meal.model";

export class MealService {
  // We define our array with our datas for meals, using the meal model.
  private meals = {
    'mexican': [
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
    ],
    'greek': [
      new MealItem('Saganaki', './assets/images/greek/sanagaki.jpg', 10, [
        '1 fromage saganaki',
        'Farine',
        'Huile d\'olive',
        '1/2 citron'
      ]),
      new MealItem('Moussaka', './assets/images/greek/moussaka.jpg', 25, ['sept', 'huit'])
    ],
    'italian': [
      new MealItem('Saltimbocca', './assets/images/italian/saltimbocca.jpg', 35, ['sept', 'huit'])
    ]
  };

  mealItem: MealItem;

  constructor() { }

  // We return our array of meals
  getMeals() {
    return this.meals;
  }

  getRecipe(type: string, name: string) {
    this.meals[type].forEach(element => {
      if (element.name === name) {
        this.mealItem = element;
      }
    });
    return this.mealItem;
  }
}
