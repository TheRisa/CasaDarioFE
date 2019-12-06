import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
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
   * Nome utente loggato
   */
  public userName = environment.userName;
  /**
   * UserName utente loggato
   */
  public user = environment.user;

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
        creator: this.user,
        type: []
      };
    });
  }
}
