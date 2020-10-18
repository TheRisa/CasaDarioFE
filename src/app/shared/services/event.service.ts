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
        map((res) => {
          const resp: EventDetail[] = [];
          res.response.forEach((event) => {
            resp.push({
              id: event.id,
              date: event.date,
              initHour: event.initHour,
              description: event.description,
              place: event.place,
              name: event.name,
              eventType: event.type.split(','),
              creator: event.creator,
              isConfirmed: event.isConfirmed
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
   * Chiama il servizio per update di un evento
   */
  public updateEvent(
    body: CreateEventBody,
    eventId: number
  ): Observable<{ response: number }> {
    return this.http.post<{ response: number }>(
      `${environment.httpRequestUrl}event/updateEvent/${eventId}`,
      body
    );
  }

  /**
   * Passando il nome di un'icona ritorna il nome dell'eventType corrispondete (non è una chiamata)
   * @param name Nome icona
   */
  public convertToIconName(name: string): EventType {
    switch (name) {
      case 'basketBall':
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
   * Passando il nome di un tipo di evento ritorna il nome dell'icona corrispondete
   * (non è una chiamata)
   * @param name Nome tipo evento
   */
  public convertFromIconName(eventType: string): string {
    switch (eventType) {
      case 'sport':
        return 'basketBall';
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
