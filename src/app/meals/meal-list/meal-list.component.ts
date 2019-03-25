import { Component, OnInit } from '@angular/core';

// Import your meal model
import {MealItem} from '../meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  //Tell that meals array should only contain some meal model you created and imported
  meals: MealItem[] = [
    new MealItem('Chili Con Carne', 'https://placehold.it/345x300', 45),
    new MealItem('Tuna Poke Tacos', 'https://placehold.it/345x300', 40),
    new MealItem('Kimchi & Bulgogi nachos', 'https://placehold.it/345x300', 25)
  ];



  constructor() { }

  ngOnInit() {
  }

}
