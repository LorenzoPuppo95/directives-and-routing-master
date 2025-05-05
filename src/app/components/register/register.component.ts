import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = {
    email: '',
    psw: '',
    id: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    if (this.user.email==='') {
      alert('name is required!');
      return;
    }
    if (this.user.psw==='') {
      alert('surname is required!');
      return;
    }
    console.log(this.user);
    this.userService.getUsers().subscribe({
      next: () => {
        this.userService.addUser(this.user).subscribe({
          next: () => {
            alert('User added successfully!');
            this.router.navigate(['/']);
          },
          error: (err) => console.error('Error adding student:', err)
        });
      },
      error: (err) => console.error('Error fetching students:', err)
    });
  }
}
