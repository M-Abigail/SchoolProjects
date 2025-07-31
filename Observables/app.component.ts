import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskServiceService } from './task-service.service';
import { NgFor } from '@angular/common'; 
import { map } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'observables';

  tareasfiltradas: any[] = [];
  //tareas: any[] = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.taskService.getTareas()
      .pipe(
        map(tareas =>
          tareas
            .filter(t => t.completado) // ✅ Solo tareas completadas
            .map(t => ({
              ...t,
              titulo: t.titulo.toUpperCase() // ✅ Título en mayúsculas
            }))
        )
      )
      .subscribe({
        next: tareas => {
          this.tareasfiltradas = tareas;
        },
        error: err => {
          console.error('Error al cargar tareas:', err);
        }
      });
  }

  /*ngOnInit() {
    this.taskService.getTareas().subscribe({
      next: (data) => {
        this.tareas = data;
        console.log('Tareas recibidas:', this.tareas);
      },
      error: (err) => {
        console.error('Error al cargar tareas:', err);
      }
    });
  }*/
}
