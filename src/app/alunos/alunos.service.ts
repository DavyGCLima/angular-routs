import { Aluno } from './aluno';
import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 0, nome: 'Aluno 01', email: 'alunos01@someemail.com' },
    { id: 1, nome: 'Aluno 02', email: 'alunos02@someemail.com' },
    { id: 2, nome: 'Aluno 03', email: 'alunos03@someemail.com' }
  ];

  canEditEmmiter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  observable: Observable<boolean> = this.canEditEmmiter.asObservable();

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number): Aluno {
    for (const aluno of this.alunos) {
      if (aluno.id === id) {
        return aluno;
      }
    }
    return null;
  }

  // este método deve estar em outro serviço
  verifyUser(data: User): boolean {
    const value = true;
    this.canEditEmmiter.next(value);
    return value;
  }

  constructor() {
  }
}
