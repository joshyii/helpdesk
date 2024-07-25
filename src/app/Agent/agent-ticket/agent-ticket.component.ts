import { Component } from '@angular/core';
import { Firestore, collection, collectionData, query, where, orderBy, addDoc, updateDoc} from '@angular/fire/firestore';
import { getFirestore, doc, getDoc} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-agent-ticket',
  templateUrl: './agent-ticket.component.html',
  styleUrls: ['./agent-ticket.component.scss']

})
export class AgentTicketComponent {

  constructor(private firestore: Firestore, private route: ActivatedRoute, private sharedService: SharedService) { 
  }

  ticket: any = "";
  messages: any = [];
  db = getFirestore();
  threadHeight = '';
  ticket_id = ""; //get from previous page
  user = "";

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticket_id = params['tickets.id'];
      this.user = params['loggedInUser'];
      console.log(this.ticket_id);
      console.log(this.user);

    });
    this.getTicket();
    this.getMessage();
  }

  async setHeight() {
    if (this.ticket.status == "Resolved") {
      this.threadHeight = '70%';
    }
    else {
      this.threadHeight = '60%';
    }
  }

  async getTicket() {
    const docRef = doc(this.db, 'Tickets', this.ticket_id);
    const docSnap = await getDoc(docRef);
    this.ticket = docSnap.data();
    this.setHeight();
  }

  async getMessage() {
    const collectionInstance = collection(this.firestore,'Tickets', this.ticket_id, 'messages');
    const queryInstance = query(
      collectionInstance,
      orderBy('send_date', 'asc')
    );
    collectionData(queryInstance)
    .subscribe(res => {
      this.messages = res;
      this.setDescription();
    });
  }
  
  addMessage(newMessage: string) {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const collectionInstance = collection(this.firestore,'Tickets', this.ticket_id, 'messages');
    addDoc(collectionInstance, {
      text: newMessage,
      send_date: timestamp,
      sender_name: this.user
    });
  }

  setDescription(){
    const docRef = doc(this.db, 'Tickets', this.ticket_id)

    updateDoc(docRef, {
      description: this.messages[0].text
    });
  }

  confirmation():void{
    confirm("Confirm to change the agent?");
  }

  markAsResolved(): void{
    let mark = confirm("Confirm to mark as resolved?");
    if (mark == true)
    {
      // this.status = "resolved";
      
    }
  }

  acceptTicket(ticketID:string, agentName:string) {
    let mark = confirm("Confirm to accept?");
    if (mark == true)
    {
    this.sharedService.acceptTicket(ticketID, agentName);}
  }
}

  

