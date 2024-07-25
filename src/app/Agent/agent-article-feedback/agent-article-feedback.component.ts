import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-agent-article-feedback',
  templateUrl: './agent-article-feedback.component.html',
  styleUrls: ['./agent-article-feedback.component.scss']
})
export class AgentArticleFeedbackComponent{
  faThumbsUp = faThumbsUp;

  goBack() {
    window.history.back();
  }

}
