import {Component, Input, OnInit} from '@angular/core';
import {HttpResponseModel} from "../models/httpResponse.model";
import {HttpResponse} from "../Enums/http-response.enum";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() status: HttpResponseModel;
  color: string;
  httpResponse = HttpResponse;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    document.querySelector('.toast').classList.add('hide');
    this.status = null;
  }

}
