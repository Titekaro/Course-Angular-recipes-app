import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss']
})
export class FormCommentComponent implements OnInit {
  @ViewChild('commentForm') commentForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.commentForm.valid) {
      return;
    }
  }

}
