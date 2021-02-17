import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  selectedSlide = 0;
  @Input() slides = [];
  @Input() templateRef: TemplateRef<HTMLElement>;

  constructor() {
  }

  showItem(index: number) {
    const slider = document.querySelector('.slider');
    this.selectedSlide = index;
    (slider as HTMLElement).style.left = ('-' + slider.clientWidth * index + 'px').toString();
  }

}
