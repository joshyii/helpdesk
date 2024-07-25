import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-article-feedback',
  templateUrl: './article-feedback.component.html',
  styleUrls: ['./article-feedback.component.scss']
})
export class ArticleFeedbackComponent{
  faThumbsUp = faThumbsUp;

  goBack() {
    window.history.back();
  }
}
