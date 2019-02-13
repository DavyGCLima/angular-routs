import { AuthService } from '../login/auth.service';

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
      console.log('authguard');
      return this.verifyAccess();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess();
  }

  verifyAccess(): boolean {
    if (this.auth.getAutenticatedUser()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
