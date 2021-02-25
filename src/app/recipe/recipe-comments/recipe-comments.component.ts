import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CommentModel} from "../../models/comment.model";
import {MealService} from "../../services/meal/meal.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.scss']
})
export class RecipeCommentsComponent implements OnInit, OnDestroy {
  @Input() comments: CommentModel[];
  @Output() showAllComments = new EventEmitter<boolean>();
  collapsed = true;
  recipeSub: Subscription;

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.recipeSub = this.mealService.recipeChanged.subscribe(recipe => {
      this.comments = recipe.comments;
    });
  }

  showCollapsed() {
    this.collapsed = !this.collapsed;
    this.showAllComments.emit(true);
  }

  ngOnDestroy() {
    if(this.recipeSub) {
      this.recipeSub.unsubscribe();
    }
  }

}
