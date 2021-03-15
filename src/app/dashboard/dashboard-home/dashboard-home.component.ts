import {Component, OnInit} from '@angular/core';
import {ChartData} from "../../chart/chart-data";
import {StatsService} from "../../services/stats/stats.service";
import {first} from "rxjs/operators";
import {RecipeModel} from "../../models/recipe.model";
import {MealService} from "../../services/meal/meal.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  chartTitle: string;
  chartData: [ChartData][];
  recipes: RecipeModel[];

  constructor(private route: ActivatedRoute, private statsService: StatsService, private mealService: MealService) {
  }

  ngOnInit() {
    if (!this.recipes) {
      this.recipes = this.route.snapshot.data['recipes'];
      this.mealService.mealsChanged.pipe(first()).subscribe((recipes: RecipeModel[]) => {
        this.recipes = recipes;
      });
    }

    this.setChartData(this.recipes, 'origin', 'origins');
  }

  setChartData(array: any[], value: string, title: string) {
    this.chartTitle = title;
    this.chartData = this.getStats(array, value);
  }

  /**
   * Return an array with the amount of key present in an array.
   * @param array
   * @param key
   */
  getStats(array, key: string) {
    const res = [];
    array.forEach(item => {
      if (!this[item[key]]) {
        this[item[key]] = [item[key], 0];
        res.push(this[item[key]]);
      }
      this[item[key]][1]++
    });
    return res;
  }

}
