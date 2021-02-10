import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meal-picture',
  templateUrl: './meal-picture.component.html',
  styleUrls: ['./meal-picture.component.scss']
})
export class MealPictureComponent implements OnInit {
  @Input() image: string;
  @Input() zoomEffect = false;

  constructor() { }

  ngOnInit() {
  }

}
