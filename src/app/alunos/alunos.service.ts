import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 0, nome: 'Aluno 01', email: 'alunos01@someemail.com' },
    { id: 1, nome: 'Aluno 02', email: 'alunos02@someemail.com' },
    { id: 2, nome: 'Aluno 03', email: 'alunos03@someemail.com' }
  ];

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

  constructor() { }
}
