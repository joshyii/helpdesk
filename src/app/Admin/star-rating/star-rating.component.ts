import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']  // Check this path
})
export class StarRatingComponent {
  @Input() maxRating: number = 5;
  @Input() currentRating: number = 0;

  stars: number[];

  constructor() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }

  rate(rating: number): void {
    this.currentRating = rating;
  }
}
