import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
