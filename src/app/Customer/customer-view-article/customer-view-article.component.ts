import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { faEye, faThumbsUp, faThumbsDown, faComments} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { CustomerFeedbackFormComponent } from '../customer-feedback-form/customer-feedback-form.component';

@Component({
  selector: 'app-customer-view-article',
  templateUrl: './customer-view-article.component.html',
  styleUrls: ['./customer-view-article.component.scss']
})
export class CustomerViewArticleComponent {

  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faComments = faComments;

  constructor(private router: Router, private _dialog: MatDialog) {
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 

  openFeedbackForm(){
    const dialogRef = this._dialog.open(CustomerFeedbackFormComponent);
  }

  goBack() {
    window.history.back();
  }
}
