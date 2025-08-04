import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userData: any = null;
  error='';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        this.userData = jwtDecode(token);
        console.log('Usuario decodificado:', this.userData);
        if (this.userData.activo=='false'){
          this.error='Usuario no Autorizado'
        };
      } catch (error) {
        console.error('Token inválido');
      }
    }
  };
  
  irActualizar() {
    this.router.navigate(['/actualizar']);
  };


}
