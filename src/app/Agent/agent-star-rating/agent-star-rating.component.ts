import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agent-star-rating',
  templateUrl: './agent-star-rating.component.html',
  styleUrls: ['./agent-star-rating.component.scss']  // Check this path
})
export class AgentStarRatingComponent {
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
