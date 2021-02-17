import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentModel} from "../../models/comment.model";
import {MealService} from "../../services/meal/meal.service";

@Component({
  selector: 'app-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.scss']
})
export class RecipeCommentsComponent implements OnInit {
  collapsed = true;
  @Input() comments: CommentModel[];
  @Output() showAllComments = new EventEmitter<boolean>();

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.mealService.recipeChanged.subscribe(recipe => {
      this.comments = recipe.comments;
    });
  }

  showCollapsed() {
    this.collapsed = !this.collapsed;
    this.showAllComments.emit(true);
  }

}
