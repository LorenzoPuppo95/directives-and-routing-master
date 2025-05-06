import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authServ = inject(AuthService);
  userServ = inject(UserService);
  router = inject(Router);

  user: User = {
      email: '',
      psw: '',
      id: ''
    };
  
  fakeLogin() {
    this.authServ.isAuth = true;
    this.router.navigate(['/home'])
  }

  login() { 
    this.userServ.getUser(this.user.email).subscribe({
      next: (user) => {
        if (!user) {
          alert("Email not found");
          return;
        }
        if (user.psw === this.user.psw) {
          this.authServ.isAuth = true;
          this.router.navigate(['/home']);
        } else {
          alert("Wrong password");
        }
      },
      error: (err) => {
        console.error("Error during login:", err);
        alert("An error occurred while logging in. Please try again later.");
      }
    });
  }
}
