import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private authApiUrl = 'http://localhost:8082/api/auth';
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<string> {
    return this.http.post(this.authApiUrl + '/login', credentials, { responseType: 'text' }).pipe(
      tap(() => this.loggedIn = true)
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
