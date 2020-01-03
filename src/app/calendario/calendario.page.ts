import { Component, OnInit } from '@angular/core';
import { icons } from './settings';
import { Router } from '@angular/router';
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
   * UserName utente loggato
   */
  public userName = localStorage.getItem('userName');
  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

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
      .getAllEvents(this.userName)
      .pipe(first())
      .subscribe(response => {
        this.events = response.response;
      });
  }

  /**
   * Naviga alla pagina di info
   */
  public navigateToInfo(eventInfo: EventDetail): void {
    if (eventInfo.creator === this.userName) {
      console.log(eventInfo);
      this.router.navigate(['/calendario/info'], {
        queryParams: {
          name: eventInfo.name,
          place: eventInfo.place,
          date: eventInfo.date,
          initHour: eventInfo.initHour,
          description: eventInfo.description,
          id: eventInfo.id,
          type: eventInfo.type.filter(type => type !== '')
        }
      });
    } else {
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

  /**
   * Prese un'ora e una data ritorna la corrispettiva stringa in italiano
   * @param date Stringa della data
   * @param hour Stringa dell'ora
   */
  public getDateString(date: string, hour: string): string {
    const eventDate = new Date(date);
    const time = hour.split(':');
    eventDate.setHours(+time[0], +time[1], +time[0]);
    const options = {
      weekday: 'long',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return eventDate.toLocaleString('it-IT', options);
  }
}
