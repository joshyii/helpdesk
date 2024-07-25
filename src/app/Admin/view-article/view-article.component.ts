import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { faEye, faThumbsUp, faThumbsDown, faComments} from '@fortawesome/free-solid-svg-icons';
import { SendReviewFormComponent } from '../send-review-form/send-review-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent {
  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faComments = faComments;

  constructor(private router: Router, private _dialog: MatDialog) {
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 

  openSendReviewForm(){
    const dialogRef = this._dialog.open(SendReviewFormComponent);
  }

  goBack() {
    window.history.back();
  }
}
