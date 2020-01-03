import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Classe per la gestione del componete header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Titolo della pagina
   */
  @Input() title: string;
  /**
   * Path della pagina a cui tornare
   */
  @Input() backTo: string;
  /**
   * Nome dell'utente
   */
  @Input() userName: string;
  /**
   * Flag per lo sfondo rosso o bianco
   */
  @Input() isRed: boolean;
  /**
   * Flag che indica se back è visible
   */
  @Input() isBackVisible: boolean;

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   */
  constructor(private router: Router) {}

  /**
   * Metodo on init della classe
   */
  ngOnInit(): void {}

  /**
   * Metodo per navigare alla pagina precedente
   */
  public goBack(): void {
    if (this.backTo) {
      this.router.navigate([this.backTo]);
    }
  }

  /**
   * Metodo per fare log out
   */
  exit() {
    localStorage.setItem('userName', '');
    localStorage.setItem('user', '');
    this.router.navigate(['login']);
  }
}
