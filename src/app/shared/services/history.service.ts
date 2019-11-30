import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserHistory } from '../models/history-service';

/**
 * Classe per il servizio history
 */
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  /**
   * Costruttore della classe
   * @param http Istanza di HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Chiamata al servizio per ricevere tutte le storie
   */
  public getAllHistory(): Observable<{ response: UserHistory[] }> {
    return this.http.get<{ response: UserHistory[] }>(
      `${environment.httpRequestUrl}history/getAllHistories`
    );
  }
}
