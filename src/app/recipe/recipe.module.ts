import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {MealModule} from "../meal-list/meal.module";

import {RecipeComponent} from "./recipe.component";
import {RecipeStepsComponent} from "./recipe-steps/recipe-steps.component";
import {RecipeIngredientsComponent} from "./recipe-ingredients/recipe-ingredients.component";
import {RecipeCommentsComponent} from "./recipe-comments/recipe-comments.component";
import {RecipeOverviewComponent} from "./recipe-overview/recipe-overview.component";
import {FormCommentComponent} from "../forms/form-comment/form-comment.component";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeStepsComponent,
    RecipeIngredientsComponent,
    RecipeCommentsComponent,
    RecipeOverviewComponent,
    FormCommentComponent,
  ],
  imports: [
    SharedModule,
    MealModule
  ],
  exports: [
    RecipeComponent,
    RecipeStepsComponent,
    RecipeIngredientsComponent,
    RecipeCommentsComponent,
    RecipeOverviewComponent,
    FormCommentComponent,
  ]
})
export class RecipeModule { }
