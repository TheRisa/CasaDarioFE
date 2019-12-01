import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BanListService } from '../shared/services/ban-list.service';
import { BannedUser } from '../shared/models/ban-list-service';
import { first } from 'rxjs/operators';

/**
 * Classe per la gestione del componente ban-list
 */
@Component({
  selector: 'app-ban-list',
  templateUrl: './ban-list.page.html',
  styleUrls: ['./ban-list.page.scss']
})
export class BanListPage implements OnInit {
  /**
   * Nome utente loggato
   */
  public userName = environment.userName;

  /**
   * Lista di utenti bannati
   */
  public banList: BannedUser[] = null;

  /**
   * Costruttore della classe
   */
  constructor(private banListService: BanListService) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.banListService
      .getBanList()
      .pipe(first())
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.banList = response.response;
      });
  }
}
