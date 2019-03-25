import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() startInterval = new EventEmitter<number>();

  initTimer;
  stopTimer;
  intervalNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.initTimer = setInterval(() => {
      this.startInterval.emit(this.intervalNumber + 1);
      this.intervalNumber++;
    }, 1000);
  };

  stopGame() {
    this.stopTimer = clearInterval(this.initTimer);
  };

}
