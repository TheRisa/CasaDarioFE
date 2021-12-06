import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
   * @param activatedRoute Istanza di ActivatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.curiosity) {
        this.curiosity = params.curiosity;
      } else {
        this.curiosity = 'Nella vita serve pazienza';
      }
    });
    setTimeout(() => {
      this.router.navigate(['/presence']);
    }, 5000);
  }
}
