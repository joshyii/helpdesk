import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: '.customer-ticket-list',
  templateUrl: './customer-ticket-list.component.html',
  styleUrls: ['./customer-ticket-list.component.scss']
})
export class CustomerTicketListComponent implements OnInit {
  constructor(private sharedService: SharedService,
    private datePipe:DatePipe) { }
  allTicket:any[]=[];
  ticket:any[]=[];
  loggedInUser="";

  ngOnInit(): void {
    this.sharedService.getTicket().subscribe((res) => {
      this.allTicket = res;
      this.ticket = [];
      this.loggedInUser=this.sharedService.getLoginUsername();
      //if allticket.customer_username === login username then push to ticket array
      for (var i = 0; i < this.allTicket.length; i++) {
        if (this.allTicket[i].customer_name === this.loggedInUser) {
          // Convert Firestore Timestamp to JavaScript Date
          const timestamp = this.allTicket[i].submit_date;
          const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

          // Format the date using the DatePipe
          this.allTicket[i].submit_date = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');

          this.ticket.push(this.allTicket[i]);
        }
      }
    });
  }
}