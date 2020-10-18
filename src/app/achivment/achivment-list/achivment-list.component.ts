import { Component, OnInit } from '@angular/core';
import { AchivmentCheckbox } from 'src/app/shared/models/achivment-service';
import { ActivatedRoute } from '@angular/router';
import {
  presenzeCheckbox,
  austriaCheckbox,
  ciboCheckbox,
  varieCheckbox,
  publicRelationsCheckbox
} from './achivment-list.const';

/**
 * Classe per la gestione del componete AchivmentList
 */
@Component({
  selector: 'app-achivment-list',
  templateUrl: './achivment-list.component.html',
  styleUrls: ['./achivment-list.component.scss']
})
export class AchivmentListComponent implements OnInit {
  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

  /**
   * Nome del tag degli achivment
   */
  public achivmentTagName: string;
  /**
   * Posizione del tag degli achivment
   */
  public achivmentTagPosition: number;

  /**
   * Lista dei checkbox da visualizzare
   */
  public checkboxList: AchivmentCheckbox[] = [];

  /**
   * Costruttore della classe
   * @param router Istanza di ActivatedRouter
   */
  constructor(private router: ActivatedRoute) {}

  /**
   * Metodo onInit del componente
   */
  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.achivmentTagName = params.tagName;
      this.checkboxList = this.getCheckboxList(+params.tagPosition);
      // Una volta ricevuta la risposta la 'spacchetto'
      // Prima split per ';' che divide la risposta tra i vari tag
      // Poi split per ',' che divide il tag nelle posizioni degli achivment ottenuti
      const tags = params.tagValues.split(';');
      const tagsValue = tags[+params.tagPosition].split(',');
      tagsValue.forEach((value) => {
        if (value && this.checkboxList.length > +value) {
          this.checkboxList[+value].isChecked = true;
        }
      });
    });
  }

  /**
   * A seconda del position tag passato restituisce l'array di checkbox corrispondente
   * @param position Posizione del tag recuperato da query params rotta
   */
  private getCheckboxList(position: number): AchivmentCheckbox[] {
    let list: AchivmentCheckbox[] = [];
    switch (position) {
      case 0:
        list = presenzeCheckbox;
        break;
      case 1:
        list = austriaCheckbox;
        break;
      case 2:
        list = ciboCheckbox;
        break;
      case 3:
        list = varieCheckbox;
        break;
      case 4:
        list = publicRelationsCheckbox;
        break;
      default:
        list = presenzeCheckbox;
    }
    return list;
  }
}
