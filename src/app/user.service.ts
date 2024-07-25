import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authenticatedUser: string | null = null;

  private userRole: string = 'Customer';

  isLogin:boolean = false;

  isUserCustomer(): boolean {
    return this.userRole === 'Customer';
  }

  isUserAgent(): boolean {
    return this.userRole === 'Agent';
  }

  isUserAdmin(): boolean {
    return this.userRole === 'Admin';
  }

  login():void {
    this.isLogin = true;
  }

  isLoggedIn(): boolean {
    //return this.authenticatedUser !== null;
    return this.isLogin;
  }

  getAuthenticatedUser(): string | null {
    return this.authenticatedUser;
  }

  logout(): void {
    this.isLogin = false;
    this.authenticatedUser = null;
  }
}