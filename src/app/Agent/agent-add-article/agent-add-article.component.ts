import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-add-article',
  templateUrl: './agent-add-article.component.html',
  styleUrls: ['./agent-add-article.component.scss']
})
export class AgentAddArticleComponent{

  goBack() {
    window.history.back();
  }
}
