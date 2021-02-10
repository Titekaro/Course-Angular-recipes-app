import {Component, Input, OnInit} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-meal-recipe',
  templateUrl: './meal-recipe.component.html',
  styleUrls: ['./meal-recipe.component.scss']
})
export class MealRecipeComponent implements OnInit {
  @Input() meal: RecipeModel;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.meal) {
      this.meal = this.route.snapshot.data['meal'];
    }
  }
}
