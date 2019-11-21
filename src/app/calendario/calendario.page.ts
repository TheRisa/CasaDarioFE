import { Component, OnInit } from '@angular/core';
import { EventDetail, EventType } from './models/event';
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

  /**
   * Naviga alla pagina di info
   */
  public navigateToInfo(): void {
    this.router.navigate(['/calendario/info']);
  }

  /**
   * Passando un eventType ritorna il nome dell'icona corrispondete
   */
  public convertToIconName(name: EventType): string {
    switch (name) {
      case 'sport':
        return 'basketball';
      case 'pub':
        return 'beer';
      case 'nerd':
        return 'logo-playstation';
      case 'laurea':
        return 'school';
      case 'gay':
        return 'transgender';
      case 'festa':
        return 'wine';
      case 'casadario':
        return 'home';
      case 'compleanno':
        return 'ribbon';
      default:
        return null;
    }
  }
}
