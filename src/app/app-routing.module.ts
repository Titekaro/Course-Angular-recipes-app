import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MealsComponent} from "./meals/meals.component";
import {MealListComponent} from "./meal-list/meal-list.component";
import {MealRecipeComponent} from "./meal-recipe/meal-recipe.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticationGuard} from "./guards/authentication/authentication.guard";
import {DashboardGuard} from "./guards/dashboard/dashboard.guard";
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {FormRecipeComponent} from "./forms/form-recipe/form-recipe.component";

const appRoutes: Routes = [
  {path: '', component: MealsComponent},
  {path: 'meals', component: MealsComponent, children: [
      {path: ':origin', component: MealListComponent},
      {path: ':origin/:name', component: MealRecipeComponent}
  ]},
  {path: 'authentication', component: AuthenticationComponent, canActivate: [AuthenticationGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard], children: [
      {path: 'home', component: DashboardHomeComponent},
      {path: 'add-recipe', component: FormRecipeComponent},
      {path: 'recipes', component: MealListComponent, data: {editMode: true}},
      {path: 'recipes/edit/:name', component: FormRecipeComponent},
      {path: 'stats', component: DashboardHomeComponent},
      {path: 'comments', component: DashboardHomeComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
