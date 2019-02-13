import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private service: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id: number = Number(route.params.id);
        console.log('Aluno detalhe resolver');
        return this.service.getAluno(id);
    }
}
