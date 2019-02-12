import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 0, nome: 'Aluno 01', email: 'alunos01@someemail.com' },
    { id: 1, nome: 'Aluno 02', email: 'alunos02@someemail.com' },
    { id: 2, nome: 'Aluno 03', email: 'alunos03@someemail.com' }
  ];

  canEditEmmiter: EventEmitter<boolean> = new EventEmitter();

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number): any {
    for (const aluno of this.alunos) {
      if (aluno.id === id) {
        return aluno;
      }
    }
    return null;
  }

  getEvent(): EventEmitter<boolean> {
    return this.canEditEmmiter;
  }

  // este método deve estar em outro serviço
  verifyUser(data: User): boolean {
    const value = true;
    this.canEditEmmiter.emit(value);
    console.log('verifyUser');
    return value;
  }

  constructor() {
    console.log(this.canEditEmmiter);
  }
}
