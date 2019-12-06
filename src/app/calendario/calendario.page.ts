import { Component, OnInit } from '@angular/core';
import { icons } from './settings';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventService } from '../shared/services/event.service';
import { first } from 'rxjs/operators';
import { EventDetail, EventType } from '../shared/models/event-service';

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
  public icons = icons;

  /**
   * Nome utente loggato
   */
  public userName = environment.userName;
  /**
   * UserName utente loggato
   */
  public user = environment.user;

  /**
   * Eventi disponibili
   */
  public events: EventDetail[] = [];

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   * @param eventService Istanza di EventService
   */
  constructor(private router: Router, private eventService: EventService) {}

  /**
   * Metodo onInit della classe. Mappa users con isInvited =  false
   */
  ngOnInit() {
    this.eventService
      .getAllEvents(this.user)
      .pipe(first())
      .subscribe(response => {
        this.events = response.response;
      });
  }

  /**
   * Naviga alla pagina di info
   */
  public navigateToInfo(eventInfo: EventDetail): void {
    this.router.navigate(['/calendario/detail'], {
      queryParams: {
        name: eventInfo.name,
        place: eventInfo.place,
        date: eventInfo.date,
        initHour: eventInfo.initHour,
        description: eventInfo.description
      }
    });
  }

  /**
   * Controlla se icon è dentro eventTypes
   * @param icon Name dell'icona
   * @param eventTypes Lista di eventType in cui cercare icon
   */
  public hasType(icon: string, eventTypes: EventType[]): boolean {
    if (!(eventTypes || eventTypes.length > 0)) {
      return false;
    }
    return eventTypes.indexOf(this.eventService.convertToIconName(icon)) >= 0;
  }
}
