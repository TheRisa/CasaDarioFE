import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from 'src/app/shared/models/event-service';

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
   * Data dell'evento
   */
  public eventDateString: string;

  /**
   * UserName utente loggato
   */
  public user = localStorage.getItem('user');
  /**
   * Nome utente loggato
   */
  private userName = localStorage.getItem('userName');

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
        id: params.id,
        date: params.date,
        initHour: params.initHour,
        description: params.description,
        place: params.place,
        name: params.name,
        creator: this.userName,
        type: []
      };

      const eventDate = new Date(this.eventInfo.date);
      const time = this.eventInfo.initHour.split(':');
      eventDate.setHours(+time[0], +time[1], +time[0]);
      const options = {
        weekday: 'long',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      this.eventDateString = eventDate.toLocaleString('it-IT', options);
    });
  }
}
