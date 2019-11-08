import { Component, Input, OnInit } from '@angular/core';

/**
 * Classe per la gestione del componete header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Titolo della pagina
   */
  @Input() title: string;
  /**
   * Nome dell'utente
   */
  @Input() userName: string;
  /**
   * Flag per lo sfondo rosso o bianco
   */
  @Input() isRed: boolean;
  /**
   * Flag che indica se back è visible
   */
  @Input() isBackVisible: boolean;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo on init della classe
   */
  ngOnInit(): void {}
}
