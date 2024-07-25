import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
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
  picture!:string;
  address!:string;

  constructor() { }
  ngOnInit(): void {
    this.username='tanengian';
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
    this.address= this.addressLine1+this.addressLine2;
  }
}
