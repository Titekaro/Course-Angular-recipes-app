import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() meal: RecipeModel;
  @Output() mealData = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.meal) {
      this.meal = this.route.snapshot.data['meal'];
    }
    this.mealData.emit(true);
  }
}
