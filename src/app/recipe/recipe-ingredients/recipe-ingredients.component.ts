import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss']
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() ingredients: [string];

  constructor() { }

  ngOnInit() {
  }

}
