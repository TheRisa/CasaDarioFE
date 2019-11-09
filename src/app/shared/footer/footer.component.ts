import { Component, OnInit, Input } from '@angular/core';

/**
 * Classe per la gestione del componente footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /**
   * Flag che indica se lo sfondo è rosso
   */
  @Input() isRed: string;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo on init della classe
   */
  ngOnInit() {}
}
