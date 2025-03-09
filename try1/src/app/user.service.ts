import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) {}

  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.userApiUrl}/register`, user);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userApiUrl);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.userApiUrl}/${id}`);
  }

  updatePassword(request: { email: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.userApiUrl}/update-password`, request);
  }

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/api/books');
  }
}
