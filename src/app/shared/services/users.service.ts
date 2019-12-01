import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AllUsersResponse, User } from '../models/users-service';

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
      `${environment.httpRequestUrl}user/getAllUsers`
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
}