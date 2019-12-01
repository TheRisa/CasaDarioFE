import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Classe per la gestione del service curiosity
 */
@Injectable({
  providedIn: 'root'
})
export class CuriosityService {
  /**
   * Costruttore della classe
   * @param http Istanza di HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Chiama il servizio per ottenere una curiosità random
   */
  public getCuriosity(): Observable<{ response: string }> {
    return this.http.get<{ response: string }>(
      `${environment.httpRequestUrl}didyouknow`
    );
  }
}
