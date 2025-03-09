import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthserviceService} from '../authservice.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  showForgotPassword = false;

  constructor(
    private authService: AuthserviceService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          alert('User logged in successfully!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Login failed. Please check your credentials.');
        }
      });
    }
  }

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
    if (this.showForgotPassword) {
      this.forgotPasswordForm.patchValue({ email: this.loginForm.get('email')?.value });
    }
  }

  updatePassword() {
    if (this.forgotPasswordForm.valid) {
      this.userService.updatePassword(this.forgotPasswordForm.value).subscribe({
        next: () => {
          this.showForgotPassword = false;
          alert('Password updated! Please login with the new password.');
        },
        error: (err) => console.error('Password update failed', err)
      });
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
