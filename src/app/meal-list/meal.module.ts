import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

import {MealListComponent} from "./meal-list.component";
import {MealComponent} from "./meal/meal.component";
import {MealPictureComponent} from "./meal/meal-picture/meal-picture.component";
import {MealInfoComponent} from "./meal/meal-info/meal-info.component";
import {ModalRecipeDirective} from "../directives/modal-recipe.directive";

@NgModule({
  declarations: [
    MealListComponent,
    MealComponent,
    MealPictureComponent,
    MealInfoComponent,
    ModalRecipeDirective
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    MealListComponent,
    MealComponent,
    MealPictureComponent,
    MealInfoComponent,
  ]
})
export class MealModule {
}
