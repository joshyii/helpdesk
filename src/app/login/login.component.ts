import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  selectedRole: string = 'User';
  selectedCompany: string = '';
  errorMessage: string = '';
  errorValide: boolean = false;
  hide: boolean = true;

  constructor(
    private router: Router,
    public sharedService: SharedService,
    private userService: UserService,
    ) { }

  setSelectedRole(role: string): void {
    this.selectedRole = role;
  }
  
  login(): void {
    // For example, this.errorMessage = 'Invalid email or password';
  
    // Check if email and password are provided and not empty
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }
  
    // Add additional validation if needed, such as email format validation
  
    this.sharedService.login(this.email, this.password)
      .then(loginSuccessful => {
        if (loginSuccessful) {
          if (this.sharedService.selectedRole === 'User' && this.sharedService.getUserRole(this.email) === 'User') {
            this.errorValide = false;
            this.userService.login();
            this.router.navigate(['customer-dashboard']); // Navigate to customer dashboard
          } else if (this.sharedService.selectedRole === 'Agent' && this.sharedService.getUserRole(this.email) === 'Agent') {
            this.errorValide = false;
            this.userService.login();
            this.router.navigate(['agent-dashboard']); // Navigate to agent dashboard
          } else if (this.sharedService.selectedRole === 'Admin' && this.sharedService.getUserRole(this.email) === 'Admin') {
            this.errorValide = false;
            this.userService.login();
            this.router.navigate(['admin-dashboard']); // Navigate to admin dashboard
          }
        } else {
          // Handle failed login
          this.errorValidation();
          console.log('Login failed');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        this.errorMessage = 'An error occurred during login'; // Display a generic error message
      });
  }

  loginPage(): void {
    this.router.navigate(['/']); // Navigate to the default route (login page)
  }

  registerPage(): void {
    this.router.navigate(['register']); // Navigate to the register page
  }

  errorValidation(): void {
    this.errorValide = true;
  }
}
