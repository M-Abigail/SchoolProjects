import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CamelCaseS1Pipe } from './CamelCaseS1';
//import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formularios';

  usuario = {
    id:'',
    contrasena:''
  };

  constructor(private http: HttpClient){}

  iniciarSesion(){
    console.log('Datos que se van a enviar:', this.usuario);
    this.http.post('http://localhost:3000/api/students/login', this.usuario)
      .subscribe({
        next: (res: any) => {
          console.log('Sesión iniciada:', res);
          alert('Sesión iniciada correctamente');
        },
        error: (err) => {
          console.error('Error al iniciar sesión:', err);
          alert('Credenciales incorrectas');
        }
      });
  }

}
