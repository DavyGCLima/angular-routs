import { AlunosService } from './../alunos/alunos.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild  {

  constructor(private service: AlunosService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('aluno guard');

    if (state.url.includes('editar')) {
      // return this.service.verifyUser(new User());
    }
    return true;
  }
}
