import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { finalize, first } from 'rxjs/operators';
import { User } from 'src/app/shared/models/users-service';

/**
 * Classe per la gestione del componente user-detail
 */
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  /**
   * Username utente loggato
   */
  public userName = localStorage.getItem('userName');
  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

  /**
   * Flag che indica se è in corso un caricamento
   */
  public isLoading = true;
  /**
   * Flag che indica se è in corso un caricamento dell'immagine
   */
  public isLoadingImg = false;

  /**
   * Informazioni sull'utente attualmente loggato
   */
  public actualUserInfo: User = null;
  /**
   * Array delle presenze annue (tradotto dalla stringa actualUserInfo.pointsFrom2020)
   */
  public presenzeAnnue = [];
  /**
   * Array dello storico dei punti stella
   */
  public starReasons: string[] = [];

  /**
   * Url immagine profilo
   */
  public imgUrl: string;

  /**
   * Costruttore della classe
   * @param actvatedRoute Istanza di ActivedRoute
   * @param router Istanza di Router
   * @param userServie Istanza di UsersService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = true;
    this.activatedRoute.queryParams.subscribe((params) => {
      if (!params.userName) {
        return;
      }
      this.usersService
        .getUserByUserName(params.userName)
        .pipe(
          first(),
          finalize(() => (this.isLoading = false))
        )
        .subscribe((user) => {
          this.actualUserInfo = user.response;
          this.presenzeAnnue = this.actualUserInfo.pointsFrom2020
            .split(',')
            .filter((punteggio) => punteggio !== '')
            .map((punto) => +punto);
          this.starReasons = user.response.starReasons.split(';');

          // Immagini profilo non disponibili per il momento
          // this.usersService
          //   .getProfileImg(params.userName)
          //   .pipe(
          //     first(),
          //     finalize(() => (this.isLoadingImg = false))
          //   )
          //   .subscribe((img) => {
          //     this.imgUrl = img.response;
          //   });
        });
    });
  }

  /**
   * Metodo per navigare agli achivment
   */
  public goToAchivment(): void {
    this.router.navigate(['/achivment'], {
      queryParams: {
        userName: this.actualUserInfo.userName
      }
    });
  }
}
