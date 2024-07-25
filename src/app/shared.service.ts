import { Injectable } from '@angular/core';
import { Firestore, doc, deleteDoc, addDoc, collection, collectionData, updateDoc, docData, where } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private users: User[] = [];
  private loginUsername:any  = "";

  constructor(private fs: Firestore, private dialog: MatDialog) {
    this.loadUsers();
  }

  getUserRole(email: string): string | null {
    const user = this.users.find(u => u.email === email);
    if (user && user.role) {
      this.setLoginUsername(user.username);
      return user.role;
    } else {
      return null; // User not found in the array or user does not have a role
    }
  }

  setLoginUsername(username: any): void {
    this.loginUsername = username;
  }

  getLoginUsername(): any {
    return this.loginUsername;
  }

  getUsers(){
    let usersCollection=collection(this.fs,'TP_Users');
    return collectionData(usersCollection,{idField:'id'});
  }
  getUserById(id: string) {
    let docRef = doc(this.fs, 'TP_Users/' + id);
    return docData(docRef);
  }

  loadUsers() {
    const usersCollection = collection(this.fs, 'TP_Users');
    collectionData(usersCollection, { idField: 'id' }).subscribe((data) => {
      // Store the retrieved users in the local 'users' array
      this.users = data;
    });
  }

  login(email: string, password: string): Promise<boolean> {
    // Replace this with your custom authentication logic
    return this.customAuthentication(email, password)
      .then((authenticated) => {
        if (authenticated) {
          return true; // Login successful
        } else {
          console.error('Login error: Invalid email or password');
          return false; // Login failed
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        return false; // Login failed
      });
  }

  private customAuthentication(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      // Find a user with the provided email
      const user = this.users.find(u => u.email === email);

      if (user && user.password === password) {
        resolve(true); // Authentication successful
      } else {
        resolve(false); // Authentication failed
      }
    });
  }

    //--------------------------
    public selectedRole: string = 'User';

    setselectedRole(Role: string): void {
      this.selectedRole = Role;
    }
  
    getselectedRole(): string {
      return this.selectedRole;
    }

  getTicket() {
    let ticketCollection = collection(this.fs, 'Tickets');
    return collectionData(ticketCollection, { idField: 'id' });
  }

  addTicket(ticketData: any) {
    let ticketCollection = collection(this.fs, 'Tickets');
    return addDoc(ticketCollection, ticketData);
  }

  acceptTicket(ticketID:string, agentID:string) {
    let ticketRef = doc(this.fs, 'Tickets', ticketID);
    return updateDoc(ticketRef, {status: "Assigned", agent_name: agentID});
  }

  requestReassignment(ticketID:string) {
    let ticketRef = doc(this.fs, 'Tickets', ticketID);
    return updateDoc(ticketRef, {status: "Unassigned", agent_name: "-"});
  }

  markAsResolved(ticketID:string) {
    let ticketRef = doc(this.fs, 'Tickets', ticketID);
    return updateDoc(ticketRef, {status: "Resolved"});
  }


}
