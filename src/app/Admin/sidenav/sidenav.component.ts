import { Component } from '@angular/core';
import { faTicketAlt, faBell, faUser, faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  faTicketAlt = faTicketAlt;
  faBell = faBell;
  faUser = faUser;
  faFileAlt = faFileAlt;
  faLightbulb = faLightbulb;
  userRole: string | null = null;

  constructor( private userService: UserService, private router: Router) {
    this.userRole = this.userService.getAuthenticatedUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']); // Make sure to replace 'login' with the actual route path
  }
  
}
