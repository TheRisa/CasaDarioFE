import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {
  EventDetail,
  EventsResponse,
  CreateEventBody,
  EventType
} from '../models/event-service';

/**
 * Classe per la gestione del service Event
 */
@Injectable({
  providedIn: 'root'
})
export class EventService {
  /**
   * Costruttore della classe
   * @param http Istanza di HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Chiama il servizio per ottenere tutti gli eventi
   */
  public getAllEvents(
    userName: string
  ): Observable<{ response: EventDetail[] }> {
    return this.http
      .get<{ response: EventsResponse[] }>(
        `${environment.httpRequestUrl}event/getEvents/${userName}`
      )
      .pipe(
        map(res => {
          const resp: EventDetail[] = [];
          res.response.forEach(event => {
            resp.push({
              id: 0,
              date: event.date,
              initHour: event.initHour,
              description: event.description,
              place: event.place,
              name: event.name,
              type: event.type.split(','),
              creator: event.creator
            });
          });
          return { response: resp };
        })
      );
  }

  /**
   * Chiama il servizio per creare un evento
   */
  public createEvent(body: CreateEventBody): Observable<{ response: number }> {
    return this.http.post<{ response: number }>(
      `${environment.httpRequestUrl}event/createEvent`,
      body
    );
  }

  /**
   * Passando il nome di un'icona ritorna il nome dell'eventType corrispondete (non è una chiamata)
   * @param name Nome icona
   */
  public convertToIconName(name: string): EventType {
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
}
