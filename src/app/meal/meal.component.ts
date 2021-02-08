import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MealService} from "../services/meal/meal.service";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  iconDirectoryUrl = 'assets/icons/';
  @Input() editMode;
  @Input() meal: RecipeModel;

  constructor(private router: Router, private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
  }

  private selectMeal(name: string) {
    if (this.editMode) {
      return;
    }
    this.router.navigate([name], {relativeTo: this.route}).then();
  }

  private showRecipe() {

  }

  private editRecipe(name: string) {
    this.router.navigate(['edit', {name}], {relativeTo: this.route}).then();
  }

  private deleteRecipe(id: string) {
    this.mealService.removeRecipe(id);
  }
}
