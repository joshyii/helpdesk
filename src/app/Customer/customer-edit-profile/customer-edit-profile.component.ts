import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-edit-profile',
  templateUrl: './customer-edit-profile.component.html',
  styleUrls: ['./customer-edit-profile.component.scss']
})
export class CustomerEditProfileComponent implements OnInit {

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
  picture!:string;
 

  constructor() { }
  ngOnInit(): void {
    this.firstName = 'Tan';
    this.lastName = 'Eng Ian';
    this.email = 'tanengian@gmail.com';
    this.contactNumber = '0123456789';
    this.addressLine1 = '123, Jalan ABC';
    this.addressLine2 = 'Taman DEF';
    this.city = 'GHI';
    this.postalCode = '12345';
    this.state = 'JKL';
    this.country = 'MNO';
    this.picture = 'https://www.w3schools.com/howto/img_avatar.png';

  }
}
