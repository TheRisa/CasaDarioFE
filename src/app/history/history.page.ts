import { Component, OnInit } from '@angular/core';
import { History } from './models/history';
import { histories } from './settings';
import { Router } from '@angular/router';

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
   * @param router Istanza di Router
   */
  constructor(private router: Router) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}

  /**
   * Metodo per navigare ai dettagli della storia
   */
  public navigateTo(): void {
    this.router.navigate(['/annales/detail']);
  }
}
