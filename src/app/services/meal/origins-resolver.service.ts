import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MealService} from "./meal.service";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OriginsResolverService implements Resolve<any[]> {
  private apiUrl = 'https://recipes-app-1f8a7-default-rtdb.europe-west1.firebasedatabase.app/';
  origins: any[];

  constructor(private mealService: MealService, private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] {
    this.origins = [];

    return this.http.get(this.apiUrl + 'origins.json').pipe(
      map(origins => {
        for (const key in origins) {
          this.origins.push({...origins[key], id: key})
        }
        return this.origins;
      })
    );
  }
}
