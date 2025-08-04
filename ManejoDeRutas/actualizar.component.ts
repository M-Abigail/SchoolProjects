import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})

export class ActualizarComponent implements OnInit {
  userData: any = {};
  error= '';

  constructor(private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userData = jwtDecode(token);
    }
  }

  actualizar() {
    // Aquí harías un this.http.put(...) a tu API con userData
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    const url = 'http://localhost:3000/api/usuarios/' + this.userData.tarjeta;
    console.log(url);
    //console.log(this.userData);
    const body = {nombre: this.userData.nombre, apellido: this.userData.apellido,
      mail: this.userData.mail, telefono: this.userData.telefono 
    }
    
    this.http.put(url,body,{headers}).subscribe({
      next: res => {
        console.log('Datos actualizados:', body);
        this.router.navigate(['/login']); // cambia por tu ruta real
      },
      error: err => {
        this.error = 'ocurrio un error';
        console.error(err);
      }
    });
  }
}
