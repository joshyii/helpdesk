import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { faEye, faThumbsUp, faThumbsDown, faComments} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent {
  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faComments = faComments;

  constructor(private router: Router) {
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 

  goBack() {
    window.history.back();
  }
}
