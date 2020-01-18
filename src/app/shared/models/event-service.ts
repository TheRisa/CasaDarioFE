/**
 * Classe per rappresentare un evento
 */
export class EventDetail {
  /**
   * Id evento
   */
  id: number;
  /**
   * Nome evento
   */
  name: string;
  /**
   * Descrizione evento
   */
  description: string;
  /**
   * Luogo evento
   */
  place: string;
  /**
   * Data evento
   */
  date: string;
  /**
   * Orario inizio
   */
  initHour: string;
  /**
   * Tipo di evento
   */
  type: string[];
  /**
   * Nome utente che ha creato l'evento
   */
  creator: string;
  /**
   * Flag che indica se la presenza è stata confermata
   */
  isConfirmed: boolean;
}

/**
 * Classe per rappresentare un evento
 */
export class EventsResponse {
  /**
   * Id evento
   */
  id: number;
  /**
   * Nome evento
   */
  name: string;
  /**
   * Descrizione evento
   */
  description: string;
  /**
   * Luogo evento
   */
  place: string;
  /**
   * Data evento
   */
  date: string;
  /**
   * Orario evento
   */
  initHour: string;
  /**
   * Tipo di evento
   */
  type: string;
  /**
   * Nome utente che ha creato l'evento
   */
  creator: string;
  /**
   * Flag che indica se la presenza è stata confermata
   */
  isConfirmed: boolean;
}

/**
 * Classe per il body del service createEvent
 */
export class CreateEventBody {
  /**
   * Nome evento
   */
  name: string;
  /**
   * Descrizione evento
   */
  description: string;
  /**
   * Luogo evento
   */
  place: string;
  /**
   * Data evento
   */
  date: string;
  /**
   * Ora evento
   */
  initHour: string;
  /**
   * Tipo di evento
   */
  type: string;
  /**
   * Username del creatore dell'evento
   */
  creator: string;
}

/**
 * Possibili tipi di evento
 */
export type EventType =
  | 'sport'
  | 'compleanno'
  | 'festa'
  | 'laurea'
  | 'pub'
  | 'nerd'
  | 'gay'
  | 'casadario';
