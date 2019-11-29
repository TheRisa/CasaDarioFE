/**
 * Classe per rappresentare un evento
 */
export class EventDetail {
  /**
   * Nome evento
   */
  name: string;
  /**
   * Data evento
   */
  date: number;
  /**
   * Tipo di evento
   */
  eventType: EventType[];
  /**
   * Luogo evento
   */
  eventPlace: string;
  /**
   * Descrizione evento
   */
  eventDescription: string;
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
