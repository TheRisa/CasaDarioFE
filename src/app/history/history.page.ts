import { Component, OnInit } from '@angular/core';
import { History } from './models/history';
import { histories } from './settings';

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
  histories: History[] = histories;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}
}
