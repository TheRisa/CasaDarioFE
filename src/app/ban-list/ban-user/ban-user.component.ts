import { Component, OnInit, Input } from '@angular/core';
import { BannedUser } from 'src/app/shared/models/ban-list-service';

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
  @Input() user: BannedUser;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo on init del componente
   */
  ngOnInit() {}
}
