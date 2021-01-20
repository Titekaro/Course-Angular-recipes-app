import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { InlineSVGModule } from "ng-inline-svg";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { MealRecipeComponent } from "./meal-recipe/meal-recipe.component";

import { HighlightMealDirective } from './directives/highlight-meal.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidenavComponent } from './dashboard/dashboard-sidenav/dashboard-sidenav.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealsComponent,
    MealListComponent,
    MealItemComponent,
    MealRecipeComponent,
    HighlightMealDirective,
    DropdownDirective,
    HeaderComponent,
    AuthenticationComponent,
    DashboardComponent,
    DashboardSidenavComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
