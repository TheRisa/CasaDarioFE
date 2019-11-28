/**
 * Classe che rappresenta un utente dell'applicazione
 */
export class AppUser {
  /**
   * Nome utente
   */
  name: string;
  /**
   * Breve descriozione dell'utente
   */
  userDescription?: string;
  /**
   * Immagine dell'utente
   */
  img?: string;
  /**
   * Flag per segnalare se l'utente è stato invitato
   */
  isInvited?: boolean;
}
