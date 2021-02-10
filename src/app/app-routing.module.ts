import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MealsComponent} from "./meals/meals.component";
import {MealListComponent} from "./meal-list/meal-list.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticationGuard} from "./guards/authentication/authentication.guard";
import {DashboardGuard} from "./guards/dashboard/dashboard.guard";
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {FormRecipeComponent} from "./forms/form-recipe/form-recipe.component";
import {DashboardRecipesComponent} from "./dashboard/dashboard-recipes/dashboard-recipes.component";
import {MealResolverService} from "./services/meal/meal-resolver.service";
import {OriginsResolverService} from "./services/meal/origins-resolver.service";

const appRoutes: Routes = [
  {path: '', component: MealsComponent},
  {path: 'meals', component: MealsComponent, children: [
      {path: ':origin', component: MealListComponent},
      {path: ':origin/:name', component: RecipeComponent, resolve: {meal: MealResolverService}}
  ]},
  {path: 'authentication', component: AuthenticationComponent, canActivate: [AuthenticationGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard], children: [
      {path: 'home', component: DashboardHomeComponent},
      {path: 'recipes', component: DashboardRecipesComponent},
      {path: 'recipes/add', component: FormRecipeComponent, resolve: {
        origins: OriginsResolverService
      }},
      {path: 'recipes/edit', component: FormRecipeComponent, resolve: {
          recipe: MealResolverService,
          origins: OriginsResolverService
      }},
      {path: 'stats', component: DashboardHomeComponent},
      {path: 'comments', component: DashboardHomeComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
