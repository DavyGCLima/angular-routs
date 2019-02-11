import { AuthService } from './login/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  idCurso: string;

  title = 'angular-router';

  showMenu = false;

  constructor(private auth: AuthService) { }

    ngOnInit() {
      this.auth.showMenuEmmiter.subscribe(
        show => this.showMenu = show
      );
    }

    ngOnDestroy() {
      this.auth.showMenuEmmiter.unsubscribe();
    }

}
