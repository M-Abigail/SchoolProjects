import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string; // ajusta según lo que te devuelva tu API
  user?: any;    // opcional: info del usuario
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarios/login'; // cambia esto por tu endpoint real


  constructor(private http: HttpClient) { }

  login(mail: string, contrasena: string): Observable<LoginResponse> {
    const body = { mail, contrasena };
    console.log(body);
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
