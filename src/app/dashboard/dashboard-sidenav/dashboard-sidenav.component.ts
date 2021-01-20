import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {
  iconDirectoryUrl = 'assets/icons/';

  constructor() {
  }

  ngOnInit() {
  }

}
