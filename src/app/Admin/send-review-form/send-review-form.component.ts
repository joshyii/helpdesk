import { Component } from '@angular/core';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-send-review-form',
  templateUrl: './send-review-form.component.html',
  styleUrls: ['./send-review-form.component.scss']
})
export class SendReviewFormComponent {
  faFileImport = faFileImport;
}
