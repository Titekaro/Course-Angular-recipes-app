import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.component.html',
  styleUrls: ['./recipe-steps.component.scss']
})
export class RecipeStepsComponent implements OnInit {
  @Input() steps: string;

  constructor() { }

  ngOnInit() {
  }

}
