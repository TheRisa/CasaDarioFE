/**
 * Interfaccia per i tag degli achivment
 */
export interface AchivmentTag {
  /**
   * Nome del tag
   */
  name: string;
  /**
   * Immagine associata
   */
  img: string;
  /**
   * Ordine posizionale del tag
   */
  position: number;
}

/**
 * Interfaccia per i checkbox nella lista achivment
 */
export interface AchivmentCheckbox {
  /**
   * Label del checkbox
   */
  label: string;
  /**
   * Flag che indica se è spuntato
   */
  isChecked: boolean;
  /**
   * Colore associato al checkbox
   */
  color: string;
}

/**
 * Interfaccia per la risposta del servizio getAchivment
 */
export interface AchivmentResponse {
  /**
   * Totale degli achiment ottenuti, nella forma
   * "base,argento,oro"
   */
  totalAchivment: string;
  /**
   * Acvhiment ottenuti, nella forma
   * 1,2,3,6;1;2,4,6;;
   * Ovvero posizione achivment ottenuti separati da virgole, tag achivment separati da ;
   */
  achivment: string;
}
