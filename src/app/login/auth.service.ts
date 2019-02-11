import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticateUser = false;

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    if (user.name === 'user@email.com' && user.password === '123' ) {
      this.autenticateUser = true;
      this.showMenuEmmiter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.autenticateUser = false;
      this.showMenuEmmiter.emit(false);
    }
  }
}
