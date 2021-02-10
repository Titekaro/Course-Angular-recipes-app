import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() header = true;
  @Input() body = true;
  @Input() footer = false;
  @Input() message: string;
  @Input() footerConfirmTextBtn: string;
  @Input() footerCloseTextBtn: string;
  @Output() confirmModal = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  confirm() {
    this.confirmModal.emit(true);
  }

  close() {
    this.closeModal.emit(true);
  }
}
