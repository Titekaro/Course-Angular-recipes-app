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
    new MealItem('Chili Con Carne', './assets/images/mexican/chili-con-carne.jpg', 45),
    new MealItem('Tuna Poke Tacos', './assets/images/mexican/tuna-tacos.jpg', 40),
    new MealItem('Kimchi & Bulgogi nachos', './assets/images/mexican/kimchi-nachos.jpg', 25)
  ];



  constructor() { }

  ngOnInit() {
  }

}
