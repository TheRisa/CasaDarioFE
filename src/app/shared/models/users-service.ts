import { ClassField } from '@angular/compiler';

/**
 * Classe per la risposta di getAllUsers
 */
export class AllUsersResponse {
  /**
   * Array di utenti
   */
  response: User[];
}

/**
 * Informazioni complete sull'utente
 */
export class User {
  /**
   * Nome utente
   */
  userName: string;
  /**
   * Nome
   */
  firstName: string;
  /**
   * Cognome
   */
  lastName: string;
  /**
   * Punti presenza totali
   */
  totalPoint: number;
  /**
   * Punti gay
   */
  gayPoint: number;
  /**
   * Punti presenze mensili
   */
  monthPoint: number;
}
