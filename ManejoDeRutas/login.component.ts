import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // asegúrate que la ruta sea correcta
import { Router } from '@angular/router'; // opcional si vas a redirigir


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.error = '';
    this.auth.login(this.username, this.password).subscribe({
      next: res => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashboard']); // cambia por tu ruta real
      },
      error: err => {
        this.error = 'Credenciales incorrectas o error de servidor';
        console.error(err);
      }
    });
  }

}
