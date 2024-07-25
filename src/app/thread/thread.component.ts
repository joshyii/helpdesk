import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {

  @Input() send_date: string = "";
  @Input() sender_name: string = "";
  @Input() text: string = "";
  


}
