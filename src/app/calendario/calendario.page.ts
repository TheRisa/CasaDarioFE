import { Component, OnInit } from '@angular/core';
import { EventDetail } from './models/event';
import { event } from './settings';
import { Router } from '@angular/router';

/**
 * Classe per la gestione del componente calendario
 */
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss']
})
export class CalendarioPage implements OnInit {
  /**
   * Eventi disponibili
   */
  events: EventDetail[] = [
    event,
    event,
    event,
    event,
    event,
    event,
    event,
    event
  ];

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   */
  constructor(private router: Router) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}

  public navigateToInfo(): void {
    this.router.navigate(['/calendario/info']);
  }
}
