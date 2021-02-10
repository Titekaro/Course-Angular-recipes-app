import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appModalRecipe]'
})
export class ModalRecipeDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
