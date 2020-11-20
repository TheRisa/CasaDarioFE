/**
 * Interfaccia per i tag degli achievement
 */
export interface AchievementTag {
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
 * Interfaccia per i checkbox nella lista achievement
 */
export interface AchievementCheckbox {
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
 * Interfaccia per la risposta del servizio getAchievement
 */
export interface AchievementResponse {
  /**
   * Totale degli achiment ottenuti, nella forma
   * "base,argento,oro"
   */
  totalAchivment: string;
  /**
   * Acvhiment ottenuti, nella forma
   * 1,2,3,6;1;2,4,6;;
   * Ovvero posizione achievement ottenuti separati da virgole, tag achievement separati da ;
   */
  achivment: string;
}
