import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {MealService} from "../../services/meal/meal.service";

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit {
  difficultyOptions = [
    'Easy',
    'Moderate',
    'Hard'
  ];
  typeOptions = [
    'Starter',
    'Soup',
    'Side dish',
    'Main course',
    'Dessert'
  ];
  originOptions = [];
  recipeForm: FormGroup;
  isEditing = false;
  recipeName: string;

  constructor(private route: ActivatedRoute, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['name']) {
        this.recipeName = params['name'];
      }
      this.isEditing = params['name'] != null;
      this.initForm();
    });

    this.getOriginOptions();
  }

  private initForm() {
    let recipeName = '';
    let recipeOrigin = '';
    let recipeType = '';
    let recipeDifficulty = '';
    let recipeImagePath = '';
    let recipeCookingTime = '';
    let recipeIngredients = [];
    let recipeDescription = '';

    if (this.isEditing) {
      const recipe = this.mealService.getRecipe(this.recipeName);
      recipeName = recipe.name;
      recipeOrigin = recipe.origin;
      recipeType = recipe.type;
      recipeDifficulty = recipe.difficulty;
      recipeImagePath = recipe.imagePath;
      recipeCookingTime = recipe.cookingTime;
      recipeIngredients = recipe.ingredients;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'origin': new FormControl(recipeOrigin),
      'type': new FormControl(recipeType),
      'difficulty': new FormControl(recipeDifficulty),
      'imagePath': new FormControl(recipeImagePath),
      'cookingTime': new FormControl(recipeCookingTime),
      'ingredients': new FormControl(recipeIngredients),
      'description': new FormControl(recipeDescription),
    })

  }

  private getOriginOptions() {
    this.mealService.getMeals().forEach(meal => {
      if (this.originOptions.indexOf(meal.origin) === -1) {
        this.originOptions.push(meal.origin);
      }
    });
  }

  private onSubmit() {
  }
}
