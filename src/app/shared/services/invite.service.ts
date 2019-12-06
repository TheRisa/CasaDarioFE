import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Classe per la gestione del service invite
 */
@Injectable({
  providedIn: 'root'
})
export class InviteService {
  /**
   * Costruttore della classe
   * @param http Istanza di HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Chiama il servizio per creare un invito
   * @param userId Id utente invitato
   * @param eventId Id evento dell'invito
   */
  public createInvite(userId: number, eventId: number) {
    return this.http.get(
      `${environment.httpRequestUrl}invite/addinvite/${userId}/${eventId}`
    );
  }
}
