import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router, CanActivateChild } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;
  showButton = 'waves-effect waves-light btn';
  private showButtonSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  editar() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        this.aluno = this.alunosService.getAluno(id);
      }
    );
    this.showButtonSub = this.alunosService.canEditEmmiter.subscribe(
      (params: boolean) => {
        console.log('onchange');
        params ? this.showButton = 'waves-effect waves-light btn' :
        this.showButton = 'btn disabled';
      }
    );
    console.log('init aluno-detalhe');
  }

  ngOnDestroy() {
    console.log('onDestroy aluno-detalhe');
    this.inscricao.unsubscribe();
    this.showButtonSub.unsubscribe();
  }
}
