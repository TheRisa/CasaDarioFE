import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
  constructor() {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}
}
