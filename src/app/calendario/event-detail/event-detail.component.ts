import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from '../models/event';
import { environment } from 'src/environments/environment';

/**
 * Classe per la gestione della componente event-detail
 */
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  /**
   * Dettagli evento
   */
  public eventInfo: EventDetail = null;

  /**
   * Nome utente loggato
   */
  public userName = environment.userName;

  /**
   * Costruttore della classe
   * @param router Istanza di ActivedRoute
   */
  constructor(private router: ActivatedRoute) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.eventInfo = {
        date: params.eventDate,
        eventDescription: params.eventDescription,
        eventPlace: params.eventPlace,
        name: params.eventName,
        eventType: []
      };
    });
  }
}
