import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 0, nome: 'Curso 1' },
      { id: 1, nome: 'Curso 2' },
      { id: 2, nome: 'Curso 3' }
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    for (const curso of cursos) {
      if (curso.id == id) { // deve ser == para comaprar corretamente fazendo conversão
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
