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
  date: string;
  /**
   * Tipo di evento
   */
  eventType: EventType[];
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
