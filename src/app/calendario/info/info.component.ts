import { Component, OnInit, ViewChild } from '@angular/core';
import { FabButton } from '../models/fab-button';
import { FabButtonTopList, FabButtonLeftList } from './settings';

/**
 * Classe per la gestione del componente info
 */
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  /**
   * Fab button superiori per insierire il tipo di evento
   */
  public fabButtonsTop: FabButton[] = FabButtonTopList;

  /**
   * Fab button superiori per insierire il tipo di evento
   */
  public fabButtonsLeft: FabButton[] = FabButtonLeftList;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}

  /**
   * Selezione/deseleziona il pulsante (lato suoeriore)
   * @param index Indice del fab button
   */
  public selectFabTop(index: number) {
    this.fabButtonsTop[index].isSelected = !this.fabButtonsTop[index]
      .isSelected;
  }

  /**
   * Selezione/deseleziona il pulsante (lato sinistro)
   * @param index Indice del fab button
   */
  public selectFabLeft(index: number) {
    this.fabButtonsLeft[index].isSelected = !this.fabButtonsLeft[index]
      .isSelected;
  }

  // TODO: non far chiudere fab button alla selezione
}
