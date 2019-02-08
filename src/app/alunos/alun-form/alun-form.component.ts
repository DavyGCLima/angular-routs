import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alun-form',
  templateUrl: './alun-form.component.html',
  styleUrls: ['./alun-form.component.css']
})
export class AlunFormComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        this.aluno = this.alunosService.getAluno(id);
        if (this.aluno.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
