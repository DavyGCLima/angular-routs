import { CursosService } from '../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  subscribe: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {   }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe( (params: any) => {
      this.id = params.id;
      this.curso = this.cursosService.getCurso(this.id);
      if (this.curso == null) {
        this.router.navigate(['/cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
