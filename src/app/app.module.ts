import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { headerComponent } from "./header/header.component";
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealItemComponent } from './meals/meal-list/meal-item/meal-item.component';
import { MealRecipeComponent } from "./meals/meal-recipe/meal-recipe.component";
import { MealAllergeneComponent } from './meals/meal-list/meal-item/meal-allergene/meal-allergene.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GreekMealsComponent } from './greek-meals/greek-meals.component';

import { HighlightMealDirective } from './directives/highlight-meal.directive';
import { DropdownDirective } from './directives/dropdown.directive';

const appRoutes: Routes = [
  {path: 'meals', component: MealsComponent, children: [
    {path: ':type', component: MealListComponent}
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    MealsComponent,
    MealListComponent,
    MealItemComponent,
    MealRecipeComponent,
    MealAllergeneComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HighlightMealDirective,
    DropdownDirective,
    GreekMealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
