import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';

import { ActivatedRoute, Router, CanActivateChild } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;
  inscricao2: Subscription;
  showButton = 'waves-effect waves-light btn';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  editar() {
    try {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    console.log('init aluno detalhe');
    this.inscricao = this.route.data.subscribe(
      ( data: { aluno: Aluno }) => {
        console.log(data);
        this.aluno = data.aluno;
      }
    );
    this.alunosService.observable.subscribe(
      (value: boolean) => {
        console.log('passou');
        value ? this.showButton = 'waves-effect waves-light btn' :
            this.showButton = 'btn disabled';
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
