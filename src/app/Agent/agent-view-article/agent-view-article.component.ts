import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { faEye, faThumbsUp, faThumbsDown, faComments} from '@fortawesome/free-solid-svg-icons';
import { AgentSendReviewFormComponent } from '../agent-send-review-form/agent-send-review-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-view-article',
  templateUrl: './agent-view-article.component.html',
  styleUrls: ['./agent-view-article.component.scss']
})
export class AgentViewArticleComponent {

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
    const dialogRef = this._dialog.open(AgentSendReviewFormComponent);
  }

  goBack() {
    window.history.back();
  }

}
