import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

  private close() {
    this.message = null;
  }
}
