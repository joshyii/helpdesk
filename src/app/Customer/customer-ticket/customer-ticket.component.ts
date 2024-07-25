import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Firestore, collection, collectionData, query, where, orderBy, addDoc, updateDoc} from '@angular/fire/firestore';
import { getFirestore, doc, getDoc} from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: ['./customer-ticket.component.scss']

})
export class CustomerTicketComponent {
  constructor(private firestore: Firestore, private route: ActivatedRoute, private sharedService: SharedService) { 
  }

  ticket_id="";
  user="";
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticket_id = params['tickets.id'];
      this.user = params['loggedInUser'];});
      console.log(this.user);
    this.getTicket();
    this.getMessage();
  }

  ticket: any = "";
  messages: any = [];
  db = getFirestore();

  async getTicket() {
    const docRef = doc(this.db, 'Tickets', this.ticket_id);
    const docSnap = await getDoc(docRef);
    this.ticket = docSnap.data();
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
    }
    );
  }

  setDescription(){
    const docRef = doc(this.db, 'Tickets', this.ticket_id)

    updateDoc(docRef, {
      description: this.messages[0].text
    });
  }
  
  addMessage(newMessage: string) {
    console.log(newMessage);
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const collectionInstance = collection(this.firestore,'Tickets', this.ticket_id, 'messages');
    addDoc(collectionInstance, {
      text: newMessage,
      send_date: timestamp,
      sender_name: this.user
    });

    
  }

  requestReassignment(ticketID:string) {
    let mark = confirm("Confirm to reassign?");
    if (mark == true)
    {
      this.sharedService.requestReassignment(ticketID);
    }
  }

}

  

