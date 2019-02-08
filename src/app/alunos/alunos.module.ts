import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunFormComponent } from './alun-form/alun-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunFormComponent,
        AlunoDetalheComponent
    ],
    providers: [AlunosService],
})
export class AlunosModule { }
