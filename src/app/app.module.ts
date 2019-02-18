import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { headerComponent } from "./header/header.component";
import { MealsComponent } from './meals/meals.component';
import { MealItemComponent } from './meals/meal-list/meal-item/meal-item.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    MealsComponent,
    MealItemComponent,
    MealListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
