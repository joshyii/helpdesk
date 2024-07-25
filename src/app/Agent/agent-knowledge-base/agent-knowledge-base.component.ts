import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agent-knowledge-base',
  templateUrl: './agent-knowledge-base.component.html',
  styleUrls: ['./agent-knowledge-base.component.scss']
})
export class AgentKnowledgeBaseComponent {

  panelOpenState = false;
  faSearch = faSearch;

  constructor(private router: Router) {
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 

}
