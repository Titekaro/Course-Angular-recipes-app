import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightMeal]'
})
export class HighlightMealDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = '#fff';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = '#fafaf8';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = '#fff';
  }

}
