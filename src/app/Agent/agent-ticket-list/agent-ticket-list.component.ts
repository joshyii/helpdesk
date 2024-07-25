import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'agent-ticket-list',
  templateUrl: './agent-ticket-list.component.html',
  styleUrls: ['./agent-ticket-list.component.scss']
})
export class AgentTicketListComponent implements OnInit {
  constructor(private sharedService: SharedService,
    private datePipe:DatePipe) { }
  allTicket:any[]=[];
  unassignedTicket:any[]=[];
  agentTicket:any[]=[];
  totalTicket=0;
  loggedInUser="";

  ngOnInit(): void {
    this.sharedService.getTicket().subscribe((res) => {
      this.allTicket = res;
      this.unassignedTicket = [];
      this.agentTicket=[];
      this.loggedInUser=this.sharedService.getLoginUsername();
      //if allticket.customer_username === login username then push to ticket array
      for (var i = 0; i < this.allTicket.length; i++) {
        if (this.allTicket[i].status === "Unassigned") {
          // Convert Firestore Timestamp to JavaScript Date
          const timestamp = this.allTicket[i].submit_date;
          const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

          // Format the date using the DatePipe
          this.allTicket[i].submit_date = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');

          this.unassignedTicket.push(this.allTicket[i]);
        }

        else if (this.allTicket[i].agent_name===this.loggedInUser){
          // Convert Firestore Timestamp to JavaScript Date
          const timestamp = this.allTicket[i].submit_date;
          const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

          // Format the date using the DatePipe
          this.allTicket[i].submit_date = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');

          this.agentTicket.push(this.allTicket[i]);
        }
      }

      this.totalTicket=this.unassignedTicket.length+this.agentTicket.length;
    });
  }

  activeFilter: string = 'inbox'; // Default filter

  setFilter(filter: string): void {
    this.activeFilter = filter;
}

  acceptTicket(ticketID:string, agentID:string) {
    let mark = confirm("Confirm to accept?");
    if (mark == true)
    {
    this.sharedService.acceptTicket(ticketID, agentID);}
  }

  requestReassignment(ticketID:string) {
    let mark = confirm("Confirm to reassign?");
    if (mark == true)
    {
      this.sharedService.requestReassignment(ticketID);
    }
  }
}
