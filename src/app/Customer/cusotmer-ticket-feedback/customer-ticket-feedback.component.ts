import { Component, OnInit } from '@angular/core';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-ticket-feedback',
  templateUrl: './customer-ticket-feedback.component.html',
  styleUrls: ['./customer-ticket-feedback.component.scss']
})
export class CustomerTicketFeedbackComponent implements OnInit {
  faFileImport = faFileImport;

  selectedRatings: number=0; // Stores the selected rating
  feedback: string = ''; // Stores the feedback

  constructor(private _dialog: MatDialogRef<CustomerTicketFeedbackComponent>) { }

  // Function to set the selected rating
  selectRating(rating: number) {
    this.selectedRatings = rating;
  }

  closeDialog() {
    this._dialog.close();
  }

  ngOnInit(): void {
  }
}
