import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-rating',
  templateUrl: './bar-rating.component.html',
  styleUrls: ['./bar-rating.component.scss']
})
export class BarRatingComponent implements OnInit {
  iconDirectoryUrl = 'assets/icons/';
  filledStars: any[];
  emptyStars: any[];
  starsMax = 5;
  @Input() score = 0;
  @Input() color: string;
  @Input() isRating = false;
  selectedScore = false;

  constructor() {
  }

  ngOnInit() {
    this.getStars(this.score);
  }

  private getStars(score?: number) {
    this.filledStars = Array(score);
    if (score < this.starsMax) {
      this.emptyStars = Array(this.starsMax - score);
    }
  }

  private onRate(rating: number) {
    this.selectedScore = true;
    this.score = rating + 1;
  }

  private highlightStars(index: number) {
    if (this.score) {
      this.selectedScore = false;
      this.removeActiveStars();
    }
    this.getActiveStars(index);
  }

  private resetStars() {
    if (this.selectedScore && this.score) {
      return;
    }
    this.removeActiveStars();
    if (this.score) {
      this.highlightStars(this.score - 1);
    }
  }

  private getActiveStars(index: number) {
    const stars = Array.from(document.getElementsByClassName('icon-star'));
    stars.forEach((star, i) => {
      if (i < index + 1) {
        star.classList.add('active');
      }
    });
  }

  private removeActiveStars() {
    const stars = Array.from(document.getElementsByClassName('icon-star active'));
    stars.forEach(star => {
      star.classList.remove('active');
    });
  }

}
