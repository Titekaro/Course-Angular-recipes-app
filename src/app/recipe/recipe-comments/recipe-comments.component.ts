import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.scss']
})
export class RecipeCommentsComponent implements OnInit {
  @Input() comments;

  constructor() { }

  ngOnInit() {
  }

}
