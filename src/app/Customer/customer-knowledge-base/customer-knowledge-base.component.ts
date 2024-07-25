import { Component } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-knowledge-base',
  templateUrl: './customer-knowledge-base.component.html',
  styleUrls: ['./customer-knowledge-base.component.scss']
})
export class CustomerKnowledgeBaseComponent {

  panelOpenState = false;
  faSearch = faSearch;
}
