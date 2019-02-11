import { Injectable } from '@angular/core';
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

  // este método deve estar em outro serviço
  async verifyUser(data: User): Promise<boolean> {
    return await new Promise( (resolve, reject) => {
      return setTimeout( () => false , 1000);
    } );
  }

  constructor() { }
}
