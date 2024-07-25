import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: '.admin-ticket-list',
  templateUrl: './admin-ticket-list.component.html',
  styleUrls: ['./admin-ticket-list.component.scss']
})
export class AdminTicketListComponent implements OnInit {
  constructor(private sharedService: SharedService,
    private datePipe:DatePipe) { }
  ticket:any[]=[];

  ngOnInit(): void {
    this.sharedService.getTicket().subscribe((res) => {
      this.ticket = res;

      //if allticket.customer_username === login username then push to ticket array
      for (var i = 0; i < this.ticket.length; i++) {
          const timestamp = this.ticket[i].submit_date;
          const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

          // Format the date using the DatePipe
          this.ticket[i].submit_date = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
        }
      
    });
  }
}
