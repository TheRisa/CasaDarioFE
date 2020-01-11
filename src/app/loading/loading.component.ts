import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuriosityService } from '../shared/services/curiosity.service';
import { first, finalize, catchError } from 'rxjs/operators';

/**
 * Classe per la gestione del componente loading
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  /**
   * Curiosità da mostrare
   */
  public curiosity: string;

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   * @param curiosityService Istanza di CuriosityService
   */
  constructor(
    private router: Router,
    private curiosityService: CuriosityService
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.curiosityService
      .getCuriosity()
      .pipe(first())
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.curiosity = response.response;
      });

    setTimeout(() => {
      this.router.navigate(['/calendario']);
    }, 5000);
  }
}
