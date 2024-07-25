import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import {collection, addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-new-ticket-form',
  templateUrl: './new-ticket-form.component.html',
  styleUrls: ['./new-ticket-form.component.scss']
})
export class NewTicketFormComponent {
  ticketForm!: FormGroup; // Declare a form group
  ticket:any[]=[];

  constructor(private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private router: Router,) {}

  loggedInUser="";

  ngOnInit(): void {
    // Initialize the form group with validators
    this.ticketForm = this.formBuilder.group({
      category: ['', Validators.required],
      priority: ['', Validators.required],
      organization: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required]
    });

    //to get the all the tickets currently in the database to create a unique ticket id
    this.sharedService.getTicket().subscribe((res) => {
      this.ticket = res;
    });

    this.loggedInUser=this.sharedService.getLoginUsername();
  }

  ngSubmit() {
    const ticketData = {
      agent_name: "-",
      customer_name:this.loggedInUser,
      category:this.ticketForm.get('category')?.value,
      priority: this.ticketForm.get('priority')?.value,
      vendor: this.ticketForm.get('organization')?.value,
      title: this.ticketForm.get('subject')?.value,
      description: this.ticketForm.get('description')?.value,
      submit_date: new Date(),
      status: "Unassigned",
      feedback:"",
      rating:"",
      problem_notes:"Enter Notes",

    }

    this.sharedService.addTicket(ticketData)
    .then((ticketDocRef) => {
      const subcollectionName = 'messages'; 
      const subcollectionData = {
        sender_name: this.loggedInUser,
        text: this.ticketForm.get('description')?.value,
        send_date: ticketData.submit_date.getTime()
      };

      const subcollectionRef = collection(ticketDocRef, subcollectionName);
      addDoc(subcollectionRef, subcollectionData)
    })

    this.router.navigate(['/customer-ticket-list']);
  }
}

