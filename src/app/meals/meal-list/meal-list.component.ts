import { Component, OnInit } from '@angular/core';

// Import your meal model
import { meal } from '../meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  //Tell that meals array should only contain some meal model you created and imported
  meals: meal[] = [];

  constructor() { }

  ngOnInit() {
  }

}
