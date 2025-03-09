import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BooksComponent} from './books/books.component';
import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [authGuard] },
  { path: 'books', component: BooksComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

