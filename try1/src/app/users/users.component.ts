import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../user.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error fetching users', err)
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => this.users = this.users.filter(user => user.id !== id),
      error: (err) => console.error('Error deleting user', err)
    });
  }
}
