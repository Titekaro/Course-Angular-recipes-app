import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
