import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MealService} from "./meal.service";
import {RecipeModel} from "../../models/recipe.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MealResolverService implements Resolve<RecipeModel> {
  private apiUrl = 'https://recipes-app-1f8a7-default-rtdb.europe-west1.firebasedatabase.app/';
  meal: RecipeModel;
  mealName: string;

  constructor(private mealService: MealService, private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeModel> | Promise<RecipeModel> | RecipeModel {
    this.mealName = route.paramMap.get('name');

    return this.http.get<RecipeModel[]>(this.apiUrl+'recipes.json').pipe(
      map((meals: RecipeModel[]) => {
        for (const key in meals) {
          if (meals[key].name === this.mealName) {
            this.meal = meals[key];
          }
        }
        return this.meal;
      })
    );

  }
}
