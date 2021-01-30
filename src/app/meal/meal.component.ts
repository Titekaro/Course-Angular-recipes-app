import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../models/recipe.model";
import {Router} from "@angular/router";
import {MealService} from "../services/meal/meal.service";

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

  constructor(private router: Router, private mealService: MealService) {
  }

  ngOnInit() {
    this.imgUrl = this.imgDirectory + this.meal.origin + '/' + this.meal.imagePath;
  }

  private editRecipe(name: string) {
    this.router.navigate(['/dashboard/recipes/edit', {name}]).then();
  }

  private deleteRecipe(id: string) {
    this.mealService.removeRecipe(id);
  }
}
