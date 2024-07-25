import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-edit-password',
  templateUrl: './customer-edit-password.component.html',
  styleUrls: ['./customer-edit-password.component.scss']
})
export class CustomerEditPasswordComponent implements OnInit {

  constructor() { }
  oldpassword!: string;
  newpassword!: string;
  confirmPassword!: string;

  ngOnInit(): void {
  }

}
