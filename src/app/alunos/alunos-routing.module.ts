import { AlunosDeaticvatedGuard } from './../guards/alunos-deactivated.guard';
import { AlunFormComponent } from './alun-form/alun-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';

const routes = [
    {
        // ao definir um children, não será necessário dizer o caminho completo
        // como /aluno/:id
        path: '',
            component: AlunosComponent,
            children: [
            { path: 'novo', component: AlunFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunFormComponent,
                canDeactivate: [AlunosDeaticvatedGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AlunosRoutingModule {}
