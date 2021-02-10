import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";

@Component({
  selector: 'app-meal-info',
  templateUrl: './meal-info.component.html',
  styleUrls: ['./meal-info.component.scss']
})
export class MealInfoComponent implements OnInit {
  private iconDirectoryUrl = 'assets/icons/';
  @Input() meal: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
