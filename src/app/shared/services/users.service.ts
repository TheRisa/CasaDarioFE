import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AllUsersResponse, User } from '../models/users-service';
import { AchievementResponse } from '../models/achivment-service';

/**
 * Classe per la gestione di users-service
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /**
   * Costruttore della classe
   * @param http Istanza di HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Chiama il servizio che restituisce tutti gli utenti
   */
  public getAllUser(): Observable<AllUsersResponse> {
    return this.http.get<AllUsersResponse>(
      `${environment.httpRequestUrl}user/getAllUsers/`
    );
  }

  /**
   * Chiama servizio per recuperare gli achievements di un utente
   * @param user Username per il quale recuperare gli achievements
   */
  public getAchievements(
    user: string
  ): Observable<{ response: AchievementResponse }> {
    return this.http.get<{ response: AchievementResponse }>(
      `${environment.httpRequestUrl}user/getAchivments/${user}`
    );
  }

  /**
   * Chiama servizio per fare login
   * @param userName Nome utente
   * @param password Password utente
   */
  public logIn(
    userName: string,
    password: string
  ): Observable<{ response: boolean }> {
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}user/login/${userName}/${password}`
    );
  }

  /**
   * Chiama servizio per recuperare utente passando userName
   * @param userName Nome utente
   */
  public getUserByUserName(userName: string): Observable<{ response: User }> {
    return this.http.get<{ response: User }>(
      `${environment.httpRequestUrl}user/getUser/${userName}`
    );
  }

  /**
   * Chiama servizio per creare nuovo utente
   * @param userName Nome account
   * @param firstName Nome dell'utente
   * @param lastName Cognome dell'utente
   * @param psw Password account
   */
  public createNewUser(
    userName: string,
    firstName: string,
    lastName: string,
    psw: string
  ): Observable<{ response: boolean }> {
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}user/createuser/${userName}/${psw}/${firstName}/${lastName}`
    );
  }

  /**
   * Chiama il servizio per ottenere l'url dell'imagine profilo di username
   * @param userName Username
   */
  public getProfileImg(userName: string): Observable<{ response: string }> {
    return this.http.get<{ response: string }>(
      `${environment.httpRequestUrl}user/getProfileImg/${userName}`
    );
  }

  /**
   * Chiama servizio per aggiornare il playerId dell'utente passato
   *
   * @param userName Username utente
   * @param playerId PlayerId da aggiornare
   * @returns Observable alla response
   */
  public updatePlayerId(
    userName: string,
    playerId: string
  ): Observable<{ response: boolean }> {
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}user/updatePlayerId/${userName}/${playerId}`
    );
  }
}
