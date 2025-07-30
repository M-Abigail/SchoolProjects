# Angular Login Form – Template Driven + HTTP

This project demonstrates how to implement a basic login form in Angular using:

- Template-driven forms
- HTTP communication with a backend API

---

## Requirements

- Node.js and npm
- Angular CLI
- A backend API running at: `http://localhost:3000/api/students/login`

---

## Config
In a standalone Angular project, make sure to import these providers in main.ts:

import { provideHttpClient } from '@angular/common/http';
import { provideForms } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideForms()]
});

The API must allow CORS requests from http://localhost:4200
