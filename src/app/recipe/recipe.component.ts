import {Component, Input, OnInit} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() meal: RecipeModel;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.meal) {
      this.meal = this.route.snapshot.data['meal'];
    }
  }
}
