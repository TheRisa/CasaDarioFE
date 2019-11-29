import { Component, OnInit } from '@angular/core';
import { EventDetail, EventType } from './models/event';
import { event, icons, user } from './settings';
import { Router } from '@angular/router';
import { AppUser } from '../shared/models/user';

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
   * Icone visuallizate
   */
  icons = icons;

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
   * tutti gli utenti applicazione
   */
  users: AppUser[] = [user, user, user, user, user, user, user, user];

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   */
  constructor(private router: Router) {}

  /**
   * Metodo onInit della classe. Mappa users con isInvited =  false
   */
  ngOnInit() {
    this.users.map(appUser => (appUser.isInvited = false));
  }

  /**
   * Naviga alla pagina di info
   */
  public navigateToInfo(eventInfo: EventDetail): void {
    this.router.navigate(['/calendario/detail'], {
      queryParams: {
        eventName: eventInfo.name,
        eventPlace: eventInfo.eventPlace,
        eventDate: eventInfo.date,
        eventDescription: eventInfo.eventDescription
      }
    });
  }

  /**
   * Passando il nome di un'icona ritorna il nome dell'eventType corrispondete
   */
  private convertToIconName(name: string): EventType {
    switch (name) {
      case 'basketball':
        return 'sport';
      case 'beer':
        return 'pub';
      case 'logo-playstation':
        return 'nerd';
      case 'school':
        return 'laurea';
      case 'transgender':
        return 'gay';
      case 'wine':
        return 'festa';
      case 'home':
        return 'casadario';
      case 'ribbon':
        return 'compleanno';
      default:
        return null;
    }
  }

  /**
   * Controlla se icon è dentro eventTypes
   * @param icon Name dell'icona
   * @param eventTypes Lista di eventType in cui cercare icon
   */
  public hasType(icon: string, eventTypes: EventType[]): boolean {
    return eventTypes.indexOf(this.convertToIconName(icon)) >= 0;
  }
}
