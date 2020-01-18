import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
  public createInvite(
    userId: number,
    eventId: number
  ): Observable<{ response: boolean }> {
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}invite/addinvite/${userId}/${eventId}`
    );
  }

  /**
   * Chiama il servizio per ottenere gli utenti invitati
   * @param eventId Id evento
   */
  public getInvitedUsers(eventId: number): Observable<{ response: string[] }> {
    return this.http.get<{ response: string[] }>(
      `${environment.httpRequestUrl}invite/getinvited/${eventId}`
    );
  }

  /**
   * Chiama il servizio per ottenere gli utenti invitati
   * @param eventId Id evento
   */
  public getInvitedAndConfirmedUsers(
    eventId: number
  ): Observable<{ response: string[] }> {
    return this.http.get<{ response: string[] }>(
      `${environment.httpRequestUrl}invite/getinvitedAndConfirmed/${eventId}`
    );
  }

  /**
   * Chiama il servizio per eliminare tutte gli inviti relativi all'evento passato
   * @param eventId Id evento
   */
  public deleteInvites(eventId: number): Observable<{ response: boolean }> {
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}invite/deleteInvites/${eventId}`
    );
  }

  /**
   * Chiama il servizio per settare la conferma a un evento
   * @param eventId Id evento
   * @param userName UserName utente
   * @param confirm Flag che segna la conferma
   */
  public setInviteConfirm(
    eventId: number,
    userName: string,
    confirm: boolean
  ): Observable<{ response: boolean }> {
    const confirmation = confirm ? 'True' : 'False';
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}invite/confirmInvite/${confirmation}/${eventId}/${userName}`
    );
  }
}
