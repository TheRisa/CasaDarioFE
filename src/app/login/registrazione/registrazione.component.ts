import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';
import { first, finalize } from 'rxjs/operators';
import { CuriosityService } from 'src/app/shared/services/curiosity.service';

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
   * Flag per indicare il caricamento
   */
  public isLoading = false;

  /**
   * Curiosità da passare a loading
   */
  private curiosity: string;

  /**
   * Costruttore della classe
   * @param usersService Istanza di Usersservice
   * @param curiosityService Istanza di CuriosityService
   * @param router Istanza di Router
   */
  constructor(
    private usersService: UsersService,
    private curiosityService: CuriosityService,
    private router: Router
  ) {}

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

    this.isLoading = true;

    this.usersService
      .createNewUser(this.userName, this.firstName, this.lastName, this.psw)
      .pipe(
        first(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(response => {
        if (!response) {
          return;
        }

        if (response.response) {
          localStorage.setItem('userName', this.userName);
          localStorage.setItem('user', this.firstName + ' ' + this.lastName);
          this.curiosityService
            .getCuriosity()
            .pipe(
              first(),
              finalize(() => {
                this.router.navigate(['loading'], {
                  queryParams: {
                    curiosity: this.curiosity
                      ? this.curiosity
                      : `Quest'app lagga perché è gratis`
                  }
                });
                this.isLoading = false;
              })
            )
            .subscribe(resp => {
              if (!resp) {
                this.curiosity = `Quest'app lagga, abbi pazienza...`;
                return;
              }

              this.curiosity = resp.response;
            });
        }
      });
  }
}
