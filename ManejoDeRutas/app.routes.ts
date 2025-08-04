import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ActivoGuard } from './guards/activo.guard';
import { inject, Inject } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
    path: 'actualizar', component: ActualizarComponent,
    canActivate: [() => inject(ActivoGuard).canActivate()]
    }
];
