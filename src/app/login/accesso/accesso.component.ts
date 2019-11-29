import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

/**
 * Classe per la gestione del componente accesso
 */
@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.scss']
})
export class AccessoComponent {
  /**
   * Valore dell'input per userName
   */
  public userName: string;

  /**
   * Valore dell'input per la password
   */
  public psw: string;

  /**
   * Costruttore della classe
   * @param usersService Istanza di UsersService
   */
  constructor(private usersService: UsersService, private router: Router) {}

  /**
   * Metodo per fare login
   */
  login() {
    this.usersService
      .logIn(this.userName, this.psw)
      .pipe(first())
      .subscribe(response => {
        if (!response) {
          return;
        }

        if (response.response) {
          this.usersService
            .getUserByUserName(this.userName)
            .pipe(first())
            .subscribe(resp => {
              if (!resp || !resp.response) {
                return;
              }

              environment.user = this.userName;
              environment.userName =
                resp.response.firstName + ' ' + resp.response.lastName;
              this.router.navigate(['/loading']);
            });
        }
      });
  }
}
