import { Component } from '@angular/core';

@Component({
  selector: 'app-approve-article',
  templateUrl: './approve-article.component.html',
  styleUrls: ['./approve-article.component.scss']
})
export class ApproveArticleComponent {
  goBack() {
    window.history.back();
  }
}
