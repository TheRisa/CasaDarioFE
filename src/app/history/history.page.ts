import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../shared/services/history.service';
import { first, finalize } from 'rxjs/operators';
import { UserHistory } from '../shared/models/history-service';

/**
 * Classe per la gestione del componente HistoryPage
 */
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {
  /**
   * Array di storie da mostrare
   */
  public histories: UserHistory[] = [];

  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

  /**
   * Flag per indicare se è in corsro un caricamento
   */
  public isLoading = true;

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   * @param historyService Istanza di HistoryService
   */
  constructor(private router: Router, private historyService: HistoryService) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = true;
    this.historyService
      .getAllHistory()
      .pipe(
        first(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.histories = response.response;
      });
  }

  /**
   * Metodo per navigare ai dettagli della storia
   */
  public navigateTo(history: UserHistory): void {
    this.router.navigate(['/annales/detail'], {
      queryParams: {
        historyName: history.name,
        historyEvent: history.event,
        historyDate: history.date,
        historyImg: history.img
      }
    });
  }
}
