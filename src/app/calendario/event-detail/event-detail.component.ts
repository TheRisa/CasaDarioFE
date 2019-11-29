import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from '../models/event';

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
   * Costruttore della classe
   * @param route Istanza di ActivedRoute
   */
  constructor(private route: ActivatedRoute) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.eventInfo = {
        date: params.eventDate,
        eventDescription: params.eventDescription,
        eventPlace: params.eventPlace,
        name: params.eventName,
        eventType: []
      };
      console.log(this.eventInfo);
    });
  }
}
