# Angular Task Manager 📋

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

This is a simple Angular project that demonstrates how to build a task list using **observables**, **services**, and **template-driven forms**. It filters and transforms tasks before displaying them, showcasing core Angular concepts such as:

- Standalone components
- Observables with RxJS
- Services and dependency injection
- Basic UI logic with `ngIf`, `ngFor`, and data binding
---

## 📦 Features

- ✅ Task list with completed tasks only
- 🔠 Transforms task titles to uppercase before displaying
- 📋 Login form (email & password) using `ngModel`
- ♻️ Modular and clean structure using standalone components

---

## TaskServiceService
This service returns a list of tasks using an Observable:

getTareas(): Observable<any[]> {
  return of(this.tasks);
}

## AppComponent
Calls the service on init (ngOnInit)

Filters only the completed tasks

Converts their titles to uppercase using RxJS map

Displays them in the template
