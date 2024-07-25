import { Component } from '@angular/core';
import { faTicketAlt, faBell, faUser, faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-sidenav',
  templateUrl: './customer-sidenav.component.html',
  styleUrls: ['./customer-sidenav.component.scss']
})
export class CustomerSidenavComponent {

  faTicketAlt = faTicketAlt;
  faBell = faBell;
  faUser = faUser;
  faFileAlt = faFileAlt;
  faLightbulb = faLightbulb;

  constructor( private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['login']); // Make sure to replace 'login' with the actual route path
  }

}
