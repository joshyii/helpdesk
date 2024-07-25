import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent {
  panelOpenState = false;
  faSearch = faSearch;

  constructor(private router: Router) {
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 
}
