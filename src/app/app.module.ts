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
import { MealRecipeComponent } from "./meal-recipe/meal-recipe.component";

import { HighlightMealDirective } from './directives/highlight-meal.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidenavComponent } from './dashboard/dashboard-sidenav/dashboard-sidenav.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { FormRecipeComponent } from './forms/form-recipe/form-recipe.component';
import { DashboardRecipesComponent } from './dashboard/dashboard-recipes/dashboard-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealsComponent,
    MealListComponent,
    MealComponent,
    MealRecipeComponent,
    HighlightMealDirective,
    DropdownDirective,
    HeaderComponent,
    AuthenticationComponent,
    DashboardComponent,
    DashboardSidenavComponent,
    DashboardHomeComponent,
    FormRecipeComponent,
    DashboardRecipesComponent
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
  bootstrap: [AppComponent]
})

export class AppModule {

}
