import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard.component";
import {DashboardGuard} from "../guards/dashboard/dashboard.guard";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {DashboardRecipesComponent} from "./dashboard-recipes/dashboard-recipes.component";
import {FormRecipeComponent} from "../forms/form-recipe/form-recipe.component";
import {MealResolverService} from "../services/meal/meal-resolver.service";
import {OriginsResolverService} from "../services/meal/origins-resolver.service";

const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [DashboardGuard], children: [
      {path: 'home', component: DashboardHomeComponent},
      {path: 'recipes', component: DashboardRecipesComponent},
      {path: 'recipes/add', component: FormRecipeComponent, resolve: {
        origins: OriginsResolverService
      }},
      {
        path: 'recipes/edit', component: FormRecipeComponent, resolve: {
          recipe: MealResolverService,
          origins: OriginsResolverService
        }
      },
      {path: 'stats', component: DashboardHomeComponent},
      {path: 'comments', component: DashboardHomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class AppDashboardRoutingModule {

}
