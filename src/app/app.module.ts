import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { headerComponent } from "./header/header.component";
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { MealRecipeComponent } from "./meal-recipe/meal-recipe.component";

import { HighlightMealDirective } from './directives/highlight-meal.directive';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    MealsComponent,
    MealListComponent,
    MealItemComponent,
    MealRecipeComponent,
    HighlightMealDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
