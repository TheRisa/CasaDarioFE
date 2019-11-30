import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AskMeService } from '../shared/services/ask-me.service';

/**
 * Classe per la gestione del componente ask-me
 */
@Component({
  selector: 'app-ask-me',
  templateUrl: './ask-me.page.html',
  styleUrls: ['./ask-me.page.scss']
})
export class AskMePage implements OnInit {
  /**
   * Nome utente loggato
   */
  public userName = environment.userName;

  /**
   * Costruttore della classe
   */
  constructor(private askmeService: AskMeService) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}

  /**
   * Chiama il servizio per aggiungere un todo
   */
  public sendTodo(): void {
    console.log('test');
    this.askmeService.addAskme('provo', 'approvo').subscribe(response => {
      console.log(response);
    });
  }
}
