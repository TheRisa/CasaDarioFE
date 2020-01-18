import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public isLoadingImg = true;

  /**
   * Informazioni sull'utente attualmente loggato
   */
  public actualUserInfo: User = null;

  /**
   * Url immagine profilo
   */
  public imgUrl: string;

  /**
   * Costruttore della classe
   * @param router Istanza di ActivedRoute
   * @param userServie Istanza di UsersService
   */
  constructor(
    private router: ActivatedRoute,
    private usersService: UsersService
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = true;
    this.isLoadingImg = true;
    this.router.queryParams.subscribe(params => {
      if (!params.userName) {
        return;
      }
      this.usersService
        .getUserByUserName(params.userName)
        .pipe(
          first(),
          finalize(() => (this.isLoading = false))
        )
        .subscribe(user => {
          this.actualUserInfo = user.response;

          this.usersService
            .getProfileImg(params.userName)
            .pipe(
              first(),
              finalize(() => (this.isLoadingImg = false))
            )
            .subscribe(img => {
              this.imgUrl = img.response;
            });
        });
    });
  }
}
