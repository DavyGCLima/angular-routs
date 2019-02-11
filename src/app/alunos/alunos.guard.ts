import { AlunosService } from './alunos.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {


  constructor(private service: AlunosService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      if (state.url.includes('editar')) {
        return this.service.verifyUser(/** capturar usuário da requisição */new User());
      }
      return true;
  }

}
