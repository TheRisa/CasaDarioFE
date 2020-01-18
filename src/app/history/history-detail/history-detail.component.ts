import { Component, OnInit, Input } from '@angular/core';
import { UserHistory } from 'src/app/shared/models/history-service';
import { ActivatedRoute } from '@angular/router';

/**
 * Classe per la gestione del componente HistoryDetail
 */
@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  /**
   * Storia da mostrare
   */
  public history: UserHistory;

  /**
   * Costruttore della classe
   * @param router Istanza di ActivatedRouter
   */
  constructor(private router: ActivatedRoute) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.history = {
        date: params.historyDate,
        img: params.historyImg,
        name: params.historyName,
        event: params.historyEvent
      };
    });
  }
}
