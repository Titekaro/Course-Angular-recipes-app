import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = 'you';
  clicks = [];
  hasClick: boolean = false;
  newClick: number = 0;

  ngOnInit () {}

  resetUsername() {
    this.username = '';
  }

  onClick() {
    this.hasClick = true;
    this.newClick = this.newClick + 1;
    this.clicks.push(this.newClick);
  }
}
