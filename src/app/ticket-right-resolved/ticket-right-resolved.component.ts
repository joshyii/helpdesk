import { Component, Input} from '@angular/core';
import { getFirestore, doc, getDoc, updateDoc} from '@angular/fire/firestore';


@Component({
  selector: 'app-ticket-right-resolved',
  templateUrl: './ticket-right-resolved.component.html',
  styleUrls: ['./ticket-right-resolved.component.scss']
})
export class TicketRightResolvedComponent {
  ticket: any = "";
  @Input() ticket_id: string = "";
  db = getFirestore();
  problemNotes = "";
  feedback = "";

  ngOnInit(): void {
    this.getTicket();

  }

  async getTicket() {
    const docRef = doc(this.db, 'Tickets', this.ticket_id);
    const docSnap = await getDoc(docRef);
    this.ticket = docSnap.data();
    this.problemNotes = this.ticket.problem_notes;
  }
}
