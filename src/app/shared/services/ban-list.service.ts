import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BannedUser } from '../models/ban-list-service';

/**
 * Classe per la gestione del service ban-list
 */
@Injectable({
  providedIn: 'root'
})
export class BanListService {
  /**
   * Costruttore della classe
   * @param http Istanza di HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Chiama il service per ottenere tutti gli utenti bannati
   */
  public getBanList(): Observable<{ response: BannedUser[] }> {
    return this.http.get<{ response: BannedUser[] }>(
      `${environment.httpRequestUrl}banlist/getlist`
    );
  }
}
