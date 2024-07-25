import { Component } from '@angular/core';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'agent-app-send-review-form',
  templateUrl: './agent-send-review-form.component.html',
  styleUrls: ['./agent-send-review-form.component.scss']
})
export class AgentSendReviewFormComponent {
  faFileImport = faFileImport;
}
