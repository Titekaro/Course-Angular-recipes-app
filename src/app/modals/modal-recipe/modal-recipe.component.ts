import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";

@Component({
  selector: 'app-modal-recipe',
  templateUrl: './modal-recipe.component.html',
  styleUrls: ['./modal-recipe.component.scss']
})
export class ModalRecipeComponent implements OnInit {
  @Input() meal: RecipeModel;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.closeModal.emit(true);
  }

}
