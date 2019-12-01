import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

/**
 * Classe per la gestione del componente registrazione
 */
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  /**
   * Username da input
   */
  public userName: string;

  /**
   * Password da input
   */
  public psw: string;

  /**
   * Conferma psw da input
   */
  public pswConfirm: string;

  /**
   * Nome da input
   */
  public firstName: string;

  /**
   * Cognome da input
   */
  public lastName: string;

  /**
   * Costruttore della classe
   * @param usersService Istanza di Usersservice
   * @param router Istanza di Router
   */
  constructor(private usersService: UsersService, private router: Router) {}

  /**
   * Metodo onInit del componente
   */
  ngOnInit() {}

  /**
   * Chiama servizio per registrare un nuovo utente
   */
  public registerUser() {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.userName ||
      !this.psw ||
      !this.pswConfirm ||
      this.psw !== this.pswConfirm
    ) {
      return;
    }

    this.usersService
      .createNewUser(this.userName, this.firstName, this.lastName, this.psw)
      .pipe(first())
      .subscribe(response => {
        if (!response) {
          return;
        }

        if (response.response) {
          this.router.navigate(['/loading']);
        }
      });
  }
}
