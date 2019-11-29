import { Component, OnInit } from '@angular/core';
import { History } from './models/history';
import { histories } from './settings';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  public histories: History[] = histories;

  /**
   * Nome utente loggato
   */
  public userName = environment.userName;

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
