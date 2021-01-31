import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
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
  mealOrigin;
  baseUrl = window.location.origin;
  imgDirectoryUrl;

  constructor(private route: ActivatedRoute, private router: Router, private mealService: MealService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['name']) {
        this.recipeName = params['name'];
      }
      this.isEditing = params['name'] != null;
      this.initForm();
    });
    this.mealOrigin = this.recipeForm.get('origin').value;
    this.imgDirectoryUrl = this.baseUrl + '/assets/images/' + this.mealOrigin + '/';
    this.getOriginOptions();
  }

  private initForm() {
    let recipeName = '';
    let recipeOrigin = '';
    let recipeType = '';
    let recipeDifficulty = '';
    let recipeImagePath = '';
    let recipeCookingTime = '';
    let recipeIngredients = new FormArray([]);
    let recipeDescription = '';

    if (this.isEditing) {
      const recipe = this.mealService.getRecipe(this.recipeName);
      recipeName = recipe.name;
      recipeOrigin = recipe.origin;
      recipeType = recipe.type;
      recipeDifficulty = recipe.difficulty;
      recipeImagePath = recipe.imagePath;
      recipeCookingTime = recipe.cookingTime;
      recipeDescription = recipe.description;

      if (recipe.ingredients.length > 0) {
        recipe.ingredients.forEach(ingredient => {
          recipeIngredients.push(
            new FormControl(ingredient, Validators.required)
          );
        });
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'origin': new FormControl(recipeOrigin, Validators.required),
      'type': new FormControl(recipeType, Validators.required),
      'difficulty': new FormControl(recipeDifficulty, Validators.required),
      'imagePath': new FormControl(recipeImagePath, [
        Validators.required,
        Validators.pattern('^.{1,}([.])([a-z.]{3,4})$')
      ]),
      'cookingTime': new FormControl(recipeCookingTime, [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      'ingredients': recipeIngredients,
      'description': new FormControl(recipeDescription, Validators.required),
    })

  }

  private get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private getOriginOptions() {
    this.mealService.getMeals().forEach(meal => {
      if (this.originOptions.indexOf(meal.origin) === -1) {
        this.originOptions.push(meal.origin);
      }
    });
  }

  private onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormControl(null, Validators.required)
    );
  }

  private onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private onSubmit() {
    if (!this.recipeForm.valid) {
      return;
    }
    if (this.isEditing) {
      this.mealService.updateRecipe(this.recipeName, this.recipeForm.value);
    } else {
      this.mealService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  private onCancel() {
    this.recipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route}).then();
  }
}
