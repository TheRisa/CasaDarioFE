import { Component, OnInit, Input } from '@angular/core';

/**
 * Classe per la gestione del componente ban-user
 */
@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrls: ['./ban-user.component.scss']
})
export class BanUserComponent implements OnInit {
  /**
   * Nome dell'utente bannato
   */
  @Input() name: string;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo on init del componente
   */
  ngOnInit() {}
}
