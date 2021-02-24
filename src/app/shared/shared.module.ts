import { NgModule } from '@angular/core';
import {InlineSVGModule} from "ng-inline-svg";
import {CommonModule} from "@angular/common";

import {BarRatingComponent} from "../bar-rating/bar-rating.component";
import {ModalComponent} from "../modals/modal/modal.component";
import {DropdownDirective} from "../directives/dropdown.directive";
import {DateFormatPipe} from "../pipes/date-format.pipe";
import {OrderByPipe} from "../pipes/orderby.pipe";
import {CommentComponent} from "../comment-list/comment/comment.component";
import {CommentListComponent} from "../comment-list/comment-list.component";
import {CapitalizePipe} from "../pipes/capitalize.pipe";
import {PaginationComponent} from "../pagination/pagination.component";

@NgModule({
  declarations: [
    BarRatingComponent,
    ModalComponent,
    DropdownDirective,
    DateFormatPipe,
    OrderByPipe,
    CommentComponent,
    CommentListComponent,
    CapitalizePipe,
    PaginationComponent
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
    DateFormatPipe,
    OrderByPipe,
    CommentComponent,
    CommentListComponent,
    CapitalizePipe,
    PaginationComponent
  ]
})
export class SharedModule { }
