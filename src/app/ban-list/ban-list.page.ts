import { Component, OnInit } from '@angular/core';
import { BanListService } from '../shared/services/ban-list.service';
import { BannedUser } from '../shared/models/ban-list-service';
import { first, finalize } from 'rxjs/operators';

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
  public userName = localStorage.getItem('user');

  /**
   * Flag per indicare se è in corso un caricamento
   */
  public isLoading = true;

  /**
   * Lista di utenti bannati
   */
  public banList: BannedUser[] = null;

  /**
   * Costruttore della classe
   * @param banListService Istanza di BaneListService
   */
  constructor(private banListService: BanListService) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = true;

    this.banListService
      .getBanList()
      .pipe(
        first(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.banList = response.response;
      });
  }
}
