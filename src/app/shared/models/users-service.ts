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
   * Id utente
   */
  id: number;
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
   * Descrizione utente
   */
  description: string;
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
  /**
   * Flag per indicare se è stato invitato (usato a front-end, non arriva da be)
   */
  isInvited?: boolean;
}
