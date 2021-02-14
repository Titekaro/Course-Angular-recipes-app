import { NgModule } from '@angular/core';
import {InlineSVGModule} from "ng-inline-svg";
import {CommonModule} from "@angular/common";

import {BarRatingComponent} from "../bar-rating/bar-rating.component";
import {ModalComponent} from "../modals/modal/modal.component";
import {DropdownDirective} from "../directives/dropdown.directive";

@NgModule({
  declarations: [
    BarRatingComponent,
    ModalComponent,
    DropdownDirective,
  ],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
  ],
  exports: [
    CommonModule,
    InlineSVGModule,
    BarRatingComponent,
    ModalComponent,
    DropdownDirective,
  ]
})
export class SharedModule { }
