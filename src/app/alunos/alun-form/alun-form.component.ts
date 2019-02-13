import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormCanDeactivateInterface } from 'src/app/guards/form-candeactivate-interface';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alun-form',
  templateUrl: './alun-form.component.html',
  styleUrls: ['./alun-form.component.css']
})
export class AlunFormComponent implements OnInit, OnDestroy, FormCanDeactivateInterface {

  aluno: any = {};
  private inscricao: Subscription;
  private formChanged = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        this.aluno = this.alunosService.getAluno(id);
        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  onInput() {
    this.formChanged = true;
    console.log('mudou');
  }

  canDeactivate(): boolean {
    return this.canChangeRoute();
  }

  canChangeRoute() {
    if (this.formChanged) {
      confirm('Deseja sair desta página?');
    }
    return true;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
