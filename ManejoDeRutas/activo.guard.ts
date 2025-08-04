import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

/*export const activoGuard: CanActivateFn = (route, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})
export class ActivoGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    try {
      const decoded: any = jwtDecode(token);
      if (decoded.activo === 'true') {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
        return false;
      }
    } catch (error) {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
