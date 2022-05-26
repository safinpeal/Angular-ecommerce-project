import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:5000/user/login";
  constructor(private http: HttpClient) { }
  saveLoginUser(logUser: any) {
    return this.http.post(this.url, logUser)
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
