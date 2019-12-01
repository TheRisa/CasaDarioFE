import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { first } from 'rxjs/operators';
import { User } from '../shared/models/users-service';
import { environment } from 'src/environments/environment';

/**
 * Classe per la gestione del componente presence
 */
@Component({
  selector: 'app-presence',
  templateUrl: './presence.page.html',
  styleUrls: ['./presence.page.scss']
})
export class PresencePage implements OnInit {
  /**
   * Informazioni sugli utenti
   */
  public usersInfo: User[] = [];

  /**
   * Nome utente loggato
   */
  public userName = environment.userName;

  /**
   * Informazioni sull'utente attualmente loggato
   */
  public actualUserInfo: User = null;

  /**
   * Costruttore della classe
   * @param usersService Istanza di UsersService
   */
  constructor(private usersService: UsersService) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.usersService
      .getAllUser()
      .pipe(first())
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.actualUserInfo = response.response
          .filter(user => user.userName === environment.user)
          .pop();
        this.usersInfo = response.response.filter(
          user => user.userName !== environment.user
        );
      });
  }
}
