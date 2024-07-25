import { Component } from '@angular/core';
import {  faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-feedback-form',
  templateUrl: './customer-feedback-form.component.html',
  styleUrls: ['./customer-feedback-form.component.scss']
})
export class CustomerFeedbackFormComponent {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
}
