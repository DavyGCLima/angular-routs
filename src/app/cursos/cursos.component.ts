import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // capturaa os cursos
    this.cursos = this.cursosService.getCursos();
    // inscreve para capturar os parametros na query da url
    this.inscricao = this.activatedRoute.queryParams.subscribe(
      (querParams: any) => {
        this.pagina = querParams.pagina;
      }
    );
  }

  // remove os listeners
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'],
    {
      queryParams: {'pagina': ++this.pagina}
    });
  }

}
