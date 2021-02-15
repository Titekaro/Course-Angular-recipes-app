import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {RecipeModel} from "../models/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MealService} from "../services/meal/meal.service";
import {ModalRecipeComponent} from "../modals/modal-recipe/modal-recipe.component";
import {ModalRecipeDirective} from "../directives/modal-recipe.directive";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  private closePreviewSub: Subscription;
  private iconDirectoryUrl = 'assets/icons/';
  confirmDeleteMeal = false;
  @Input() editMode;
  @Input() meal: RecipeModel;
  @ViewChild(ModalRecipeDirective) modalRecipe: ModalRecipeDirective;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mealService: MealService,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  private selectMeal(name: string) {
    if (this.editMode) {
      return;
    }
    this.router.navigate([name], {relativeTo: this.route}).then();
  }

  private showRecipe(meal: RecipeModel) {
    const modalRecipeComponent = this.componentFactoryResolver.resolveComponentFactory(ModalRecipeComponent);
    const viewContainerRef = this.modalRecipe.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(modalRecipeComponent);
    componentRef.instance.meal = meal;

    this.closePreviewSub = componentRef.instance.closeModal.subscribe(() => {
      viewContainerRef.clear();
      this.closePreviewSub.unsubscribe();
    });
  }

  private editRecipe(name: string) {
    this.router.navigate(['edit', {name}], {relativeTo: this.route}).then();
  }

  private onConfirmDeleteMeal() {
    this.confirmDeleteMeal = true;
  }

  private deleteMeal(id: string) {
    this.mealService.removeRecipe(id);
  }

  private abortDeleteMeal() {
    this.confirmDeleteMeal = false;
  }
}
