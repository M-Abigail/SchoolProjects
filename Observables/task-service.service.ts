import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks = [
    { id: 1, titulo: 'Estudiar Angular', completado: true },
    { id: 2, titulo: 'Hacer ejercicios', completado: true },
    { id: 3, titulo: 'Leer documentación', completado: true },
    { id: 4, titulo: 'Cocinar pollo', completado: false },
    { id: 5, titulo: 'Mandar correo a la profesora', completado: false },
    { id: 6, titulo: 'Bañar al gato', completado: false },
    { id: 7, titulo: 'Comprar sandia', completado: false },
    { id: 8, titulo: 'Ver los 4 fantasticos', completado: false }
  ];

  constructor() {}

  getTareas(): Observable<any[]> {
    // Simula una respuesta asincrónica
    return of(this.tasks);
  }
}


 
