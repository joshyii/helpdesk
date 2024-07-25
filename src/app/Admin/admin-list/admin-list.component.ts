import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user'; // Change to your User type
import { UserData } from 'src/app/Admin/userdata';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  users: User[] = []; // Use User type for users array
 
  constructor(private userService: UserService) { }
  // constructor() { }

  ngOnInit(): void {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }

  deleteUser(id: any) {
    const user = this.users.find(x => x.id === id);
    if (user) {
      user.isDeleting = true;
      this.userService.delete(id)
        .pipe(first())
        .subscribe(() => {
          this.users = this.users.filter(x => x.id !== id);
        });
    }
  }

}
