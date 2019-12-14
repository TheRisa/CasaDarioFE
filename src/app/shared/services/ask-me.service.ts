import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Classe per la gestione del service ask-me
 */
@Injectable({
  providedIn: 'root'
})
export class AskMeService {
  /**
   * Costruttore della classe
   */
  constructor(private http: HttpClient) {}

  public addAskme(
    title: string,
    todo: string
  ): Observable<{ response: boolean }> {
    return this.http.get<{ response: boolean }>(
      `${environment.httpRequestUrl}askme/addTodo/${title}/${todo}`
    );
  }
}
