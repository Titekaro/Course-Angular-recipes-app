import {Directive} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Directive({
  selector: '[appSlideDown]',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({height: 0}),
        animate(100, style({height: 'auto'}))
      ])
    ])
  ]
})
export class SlideDownDirective {

  constructor() {
  }

}
