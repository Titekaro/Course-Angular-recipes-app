import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MealService} from "../../services/meal/meal.service";
import {RecipeModel} from "../../models/recipe.model";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpResponseModel} from "../../models/httpResponse.model";
import {HttpResponse} from "../../Enums/http-response.enum";

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss']
})
export class FormCommentComponent implements OnInit {
  @ViewChild('commentForm') commentForm: NgForm;
  @Input() recipe: RecipeModel;
  score: number;
  httpResponse: HttpResponseModel;

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
  }

  getRating(event) {
    this.score = event;
  }

  onSubmit() {
    if (!this.commentForm.valid || !this.score) {
      return;
    }
    let recipe;
    const newComment = {
      rating: this.score,
      username: this.commentForm.value.pseudo,
      feedback: this.commentForm.value.feedback,
      date: new Date()
    };

    if (this.recipe.comments) {
      recipe = {...this.recipe, comments: [...this.recipe.comments, newComment]}
    } else {
      recipe = {...this.recipe, comments: [newComment]}
    }

    this.mealService.updateRecipe(this.recipe.id, recipe).subscribe(() => {
    }, (errorResponse: HttpErrorResponse) => {
      this.httpResponse = {
        type: HttpResponse.ERROR,
        message: errorResponse.error.error
      };
    }, () => {
      this.httpResponse = {
        type: HttpResponse.SUCCESS,
        message: 'You comment has been published successful.'
      };
      this.commentForm.resetForm();
      this.score = undefined;
      this.mealService.recipeChanged.next(recipe);
    });
    this.mealService.fetchRecipesData();
    this.resetHttpResponse();
  }

  private resetHttpResponse() {
    setTimeout(() => {
      document.querySelector('.toast').classList.add('hide');
      this.httpResponse = null;
    }, 5000);
  }

}
