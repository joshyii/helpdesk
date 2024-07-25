import { Component, Input } from '@angular/core';
import { getFirestore, doc, getDoc, updateDoc} from '@angular/fire/firestore';


@Component({
  selector: 'app-ticket-right-assigned',
  templateUrl: './ticket-right-assigned.component.html',
  styleUrls: ['./ticket-right-assigned.component.scss']
})
export class TicketRightAssignedComponent {
  editing = false;
  problemNotes = 'Click to edit';
  editedProblemNote = '';
  ticket: any = "";
  @Input() ticket_id: string = "";
  db = getFirestore();

  ngOnInit(): void {
    this.getTicket();
  }

  async getTicket() {
    const docRef = doc(this.db, 'Tickets', this.ticket_id);
    const docSnap = await getDoc(docRef);
    this.ticket = docSnap.data();
    this.problemNotes = this.ticket.problem_notes;
  }

  startEditing() {
    this.editedProblemNote = this.problemNotes;
    this.editing = true;
  }

  async saveChanges() {
    this.problemNotes = this.editedProblemNote;
    this.editing = false;
    //this.cdr.detectChanges();
    console.log('Changes saved.');

    const docRef = doc(this.db, 'Tickets', this.ticket_id)

    await updateDoc(docRef, {
      problem_notes: this.problemNotes
    });

  }
}