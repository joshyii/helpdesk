import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, query, where, orderBy, addDoc, updateDoc} from '@angular/fire/firestore';
import { getFirestore, doc, getDoc} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.scss']
})
export class AdminTicketComponent {

  ticket_id = ""; //get from previous page
  ticket: any = "";
  messages: any = [];
  db = getFirestore();

  constructor(private firestore: Firestore, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticket_id = params['tickets.id'];});
    this.getTicket();
    this.getMessage();

  }

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
      console.log(this.messages);
    }
    );
  }


}