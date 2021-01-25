import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../models/recipe.model";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  @Input() editMode;
  @Input() meal: RecipeModel;

  imgDirectory = './assets/images/';
  imgUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.imgUrl = this.imgDirectory + this.meal.origin + '/' + this.meal.imagePath;
  }

  private editRecipe() {
  }

  private deleteRecipe() {
  }
}
