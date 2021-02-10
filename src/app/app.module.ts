import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { InlineSVGModule } from "ng-inline-svg";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealComponent } from './meal/meal.component';
import { RecipeComponent } from "./recipe/recipe.component";
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidenavComponent } from './dashboard/dashboard-sidenav/dashboard-sidenav.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { FormRecipeComponent } from './forms/form-recipe/form-recipe.component';
import { DashboardRecipesComponent } from './dashboard/dashboard-recipes/dashboard-recipes.component';
import { ModalRecipeComponent } from './modals/modal-recipe/modal-recipe.component';
import { ModalRecipeDirective } from './directives/modal-recipe.directive';
import { ModalComponent } from './modals/modal/modal.component';
import { RecipeStepsComponent } from './recipe/recipe-steps/recipe-steps.component';
import { RecipeIngredientsComponent } from './recipe/recipe-ingredients/recipe-ingredients.component';
import { RecipeCommentsComponent } from './recipe/recipe-comments/recipe-comments.component';
import { RecipeOverviewComponent } from './recipe/recipe-overview/recipe-overview.component';
import { MealInfoComponent } from './meal/meal-info/meal-info.component';
import { MealPictureComponent } from './meal/meal-picture/meal-picture.component';
import { FormCommentComponent } from './forms/form-comment/form-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealsComponent,
    MealListComponent,
    MealComponent,
    RecipeComponent,
    DropdownDirective,
    HeaderComponent,
    AuthenticationComponent,
    DashboardComponent,
    DashboardSidenavComponent,
    DashboardHomeComponent,
    FormRecipeComponent,
    DashboardRecipesComponent,
    ModalRecipeComponent,
    ModalRecipeDirective,
    ModalComponent,
    RecipeStepsComponent,
    RecipeIngredientsComponent,
    RecipeCommentsComponent,
    RecipeOverviewComponent,
    MealInfoComponent,
    MealPictureComponent,
    FormCommentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalRecipeComponent]
})

export class AppModule {

}
