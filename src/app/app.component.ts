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

  ngOnInit () {}

  resetUsername() {
    this.username = '';
  }

  onClick() {
    this.hasClick = true;
    this.clicks.push(this.clicks.length + 1);
  }
}
