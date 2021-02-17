import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from "../../models/comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: CommentModel;

  constructor() { }

  ngOnInit() {
  }

}
