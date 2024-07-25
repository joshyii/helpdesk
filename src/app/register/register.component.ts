import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username!:string;
  firstName!: string;
  lastName!: string;
  email!: string;
  contactNumber!: string;
  addressLine1!: string;
  addressLine2!: string;
  city!: string;
  postalCode!: string;
  state!: string;
  country!: string;
  constructor(
    ) { }

}
