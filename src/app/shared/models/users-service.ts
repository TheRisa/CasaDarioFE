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
   * Punteggi presenze dal 2020 in poi nella forma "3,2,5,1,"
   */
  pointsFrom2020: string;
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
  /** Punti Napoli */
  napoliPoint: number;
  /**
   * Punti presenze mensili
   */
  monthPoint: number;
  /**
   * Url immagine profilo
   */
  profileImg: string;
  /**
   * Flag che indica se l'utente è attualmente una star
   */
  isStar: boolean;
  /**
   * Storico dei motivi dei punti stella
   */
  starReasons: string;
  /**
   * Flag per indicare se è stato invitato (usato a front-end, non arriva da be)
   */
  isInvited?: boolean;
  /** Id per le push notification */
  playerId?: string;
}
