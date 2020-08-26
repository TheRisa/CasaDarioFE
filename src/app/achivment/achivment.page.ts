import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AchivmentTag } from '../shared/models/achivment-service';
import { UsersService } from '../shared/services/users.service';
import { finalize, first } from 'rxjs/operators';

/**
 * Classe per la gestione della pagina Achivment
 */
@Component({
  selector: 'app-achivment',
  templateUrl: './achivment.page.html',
  styleUrls: ['./achivment.page.scss']
})
export class AchivmentPage implements OnInit {
  /**
   * Nome utente loggato
   */
  public userName = localStorage.getItem('user');

  /**
   * Flag che indica se è in corso un caricamento
   */
  public isLoading = true;
  /**
   * Stringa che indica quali achivment sono stati ottenuti dall'utente
   */
  private achivment: string;

  /**
   * Array con i totali degli achivment ottenuti in posizione
   * 0: regular
   * 1: argento
   * 2: oro
   */
  public totalAchivments: string[] = ['0', '0', '0'];

  /**
   * Array delle varie tipologie di achivment
   */
  public achivmentTags: AchivmentTag[] = [
    {
      name: 'Presenze',
      img: '../../assets/icon/achivment-presenze.jpg',
      position: 0
    },
    {
      name: 'Austria',
      img: '../../assets/icon/achivment-austria.jpg',
      position: 1
    },
    {
      name: 'Cibo',
      img: '../../assets/icon/achivment-cibo.jpg',
      position: 2
    },
    {
      name: 'Varie',
      img: '../../assets/icon/achivment-varie.jpg',
      position: 3
    }
  ];

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   * @param usersService Istanza di UsersService
   * @param activatedRoute Istanza di ActivatedRoute
   */
  constructor(
    private router: Router,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Metodo onInit della classe. Controlla se è presente un query param per l'username.
   * Se c'è il servizio per gli achivment viene chiamato con esso,
   * altrimenti si chiama per l'utente loggato
   */
  ngOnInit() {
    this.activatedRoute.queryParams.pipe(first()).subscribe((params) => {
      let userName = this.userName;
      if (params.userName) {
        userName = params.userName;
      }

      this.usersService
        .getAchivments(userName)
        .pipe(
          first(),
          finalize(() => (this.isLoading = false))
        )
        .subscribe((response) => {
          if (!response) {
            return;
          }

          this.totalAchivments = response.response.totalAchivment.split(',');
          this.achivment = response.response.achivment;
        });
    });
  }

  /**
   * Metodo per navigare ai dettagli della storia
   */
  public navigateTo(tag: AchivmentTag): void {
    this.router.navigate(['/achivment/list'], {
      queryParams: {
        tagName: tag.name,
        tagPosition: tag.position,
        tagValues: this.achivment
      }
    });
  }
}
