import { Component, OnInit } from '@angular/core';
import { UserInfo } from './models/userInfo';
import { actualUser } from './settings';

/**
 * Classe per la gestione del componente presence
 */
@Component({
  selector: 'app-presence',
  templateUrl: './presence.page.html',
  styleUrls: ['./presence.page.scss']
})
export class PresencePage implements OnInit {
  /**
   * Informazioni sugli utenti
   */
  usersInfo: UserInfo[] = [
    actualUser,
    actualUser,
    actualUser,
    actualUser,
    actualUser,
    actualUser
  ];

  actualUserInfo: UserInfo = actualUser;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}
}
