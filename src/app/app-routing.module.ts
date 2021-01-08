import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MealsComponent} from "./meals/meals.component";
import {MealListComponent} from "./meal-list/meal-list.component";
import {MealRecipeComponent} from "./meal-recipe/meal-recipe.component";

const appRoutes: Routes = [
  {path: '', component: MealsComponent},
  {path: 'meals', component: MealsComponent, children: [
    {path: ':category', component: MealListComponent, children: [
        {path: ':name', component: MealRecipeComponent}
      ]}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
