import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MealsComponent} from './meals/meals.component';
import {HeaderComponent} from './header/header.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SharedModule} from './shared/shared.module';
import {MealModule} from './meal-list/meal.module';
import {RecipeModule} from './recipe/recipe.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavTabsComponent } from './navbar/nav-tabs/nav-tabs.component';
import { DropdownComponent } from './ui/dropdown/dropdown.component';

import {AuthenticationService} from './services/authentication/authentication.service';
import {UserService} from './services/user/user.service';
import {MealService} from './services/meal/meal.service';
import {MealResolverService} from './services/meal/meal-resolver.service';
import {ViewportScroller} from '@angular/common';

import {AuthenticationGuard} from './guards/authentication/authentication.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealsComponent,
    HeaderComponent,
    AuthenticationComponent,
    NavTabsComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MealModule,
    RecipeModule,
    SharedModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    UserService,
    MealService,
    MealResolverService,
    ViewportScroller,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {

}
