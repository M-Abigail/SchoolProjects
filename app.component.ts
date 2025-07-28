import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CamelCaseS1Pipe } from './CamelCaseS1';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CamelCaseS1Pipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipeCamelCase1';

  textos: string[] = [
    'hola mundo',
    'angular es genial',
    'pipes personalizados',
    'typescript y componentes',
    'miriam abigail'
  ];
}
