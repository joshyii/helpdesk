import { Component } from '@angular/core';
import { UserService } from './user.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_v16';
  sideBarOpen = true;

  constructor(public sharedService: SharedService, public userService: UserService) { }
  ticket: any[] = [];

  refreshTicketList() {
    this.sharedService.getTicket().subscribe((res) => {
      this.ticket = res;
    });
  }

  addTickets(TicketData: any) {
    this.sharedService.addTicket(TicketData).then((res) => {
      console.log('Ticket Submitted:', res);
      this.refreshTicketList();
    }).catch(error => {
      console.error('Error submitting ticket:', error);
    });
  }
}
