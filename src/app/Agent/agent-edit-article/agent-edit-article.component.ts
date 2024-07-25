import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { faEye, faThumbsUp, faThumbsDown, faComments} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agent-edit-article',
  templateUrl: './agent-edit-article.component.html',
  styleUrls: ['./agent-edit-article.component.scss']
})
export class AgentEditArticleComponent {

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
