import {RecipeModel} from "../../models/recipe.model";
import * as meals from "../../../mocks/recipes.json";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://recipes-app-1f8a7-default-rtdb.europe-west1.firebasedatabase.app/';
  private meals: RecipeModel[];
  private mealsWithOrigin: RecipeModel[];
  mealsChanged = new Subject<RecipeModel[]>();
  isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  /**
   * Return the list of all meals,
   * or just the list of meals with a specific origin.
   * @param origin
   */
  getMeals(origin?: string) {
    this.fetchRecipesData(origin);
    if (origin) {
      return this.mealsWithOrigin;
    } else {
      return this.meals;
    }
  }

  /**
   * Return the wanted recipe.
   * @param name
   */
  getRecipe(name: string) {
    return this.fetchRecipesData().find(meal => {
      return meal.name === name;
    });
  }

  addRecipe(recipe: RecipeModel) {
    this.http.post<RecipeModel>(this.apiUrl + 'recipes.json', recipe).subscribe(() => {
    }, (response) => {
      console.log(response);
    }, () => {
      this.fetchRecipesData();
    });
  }

  updateRecipe(id: string, recipe: RecipeModel) {
    this.http.patch<RecipeModel>(this.apiUrl + 'recipes/' + id + '.json', recipe).subscribe(() => {
    }, (error) => {
      console.log(error);
    }, () => {
      this.fetchRecipesData();
    });
  }

  removeRecipe(id: string) {
    this.http.delete(this.apiUrl + 'recipes/' + id + '.json').subscribe(() => {
    }, (error) => {
      console.log(error);
    }, () => {
      this.fetchRecipesData();
    });
  }

  fetchRecipesData(origin?: string) {
    this.http.get<RecipeModel[]>(this.apiUrl + 'recipes.json').pipe(
      map((meals: RecipeModel[]) => {
        const array = [];
        for (const key in meals) {
          array.push({...meals[key], id: key})
        }
        return array;
      })
    ).subscribe((recipes: RecipeModel[]) => {
      this.isLoading.next(true);

      if (origin) {
        this.mealsWithOrigin = recipes.filter(meal => {
          return meal.origin === origin;
        });
        this.mealsChanged.next(this.mealsWithOrigin);
      } else {
        this.meals = recipes;
        this.mealsChanged.next(this.meals);
      }
    }, () => {
      this.isLoading.next(false);
    }, () => {
      this.isLoading.next(false);
    });

    if (origin) {
      return this.mealsWithOrigin;
    } else {
      return this.meals;
    }
  }
}
