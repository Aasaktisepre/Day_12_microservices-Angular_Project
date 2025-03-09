import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigate(['/users']);
        },
        error: (err) => console.error('Registration failed', err)
      });
    }

  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
