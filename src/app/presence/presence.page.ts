import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { first, finalize } from 'rxjs/operators';
import { User } from '../shared/models/users-service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

/**
 * Classe per la gestione del componente presence
 */
@Component({
  selector: 'app-presence',
  templateUrl: './presence.page.html',
  styleUrls: ['./presence.page.scss']
})
export class PresencePage implements OnInit {
  /**
   * Informazioni sugli utenti
   */
  public usersInfo: User[] = [];

  /**
   * Flag che indica se è in corso un caricamento
   */
  public isLoading = true;
  /**
   * Flag che indica se è in corso un caricamento dell'immagine
   */
  public isLoadingImg = true;

  /**
   * Url immagine profilo
   */
  public imgUrl: string;

  /**
   * Username utente loggato
   */
  public userName = localStorage.getItem('userName');
  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

  /**
   * Informazioni sull'utente attualmente loggato
   */
  public actualUserInfo: User = null;

  /**
   * Costruttore della classe
   * @param usersService Istanza di UsersService
   * @param toastController Istanza di ToastController
   * @param router Istanza di Router
   */
  constructor(
    private usersService: UsersService,
    private toastController: ToastController,
    private router: Router
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = true;
    this.isLoadingImg = true;
    this.usersService
      .getAllUser()
      .pipe(
        first(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((response) => {
        if (!response) {
          return;
        }

        this.actualUserInfo = response.response
          .filter((user) => user.userName === this.userName)
          .pop();
        this.usersInfo = response.response;
        this.ordinaPerPresenzeAnnue();
      });

    this.usersService
      .getProfileImg(this.userName)
      .pipe(
        first(),
        finalize(() => (this.isLoadingImg = false))
      )
      .subscribe((img) => {
        if (!img.response) {
          this.imgUrl = '../../assets/icon/img-error.png';
          this.presentToast(`Errore nel caricamento dell'immagine`);
          return;
        }

        this.imgUrl = img.response;
      });
  }

  /**
   * Ordina userInfo in base alla presenza dell'anno attuale
   */
  private ordinaPerPresenzeAnnue(): void {
    this.usersInfo.sort(
      (user1, user2) =>
        this.calcolaPuntiAnnoAttuale(user2.pointsFrom2020) -
        this.calcolaPuntiAnnoAttuale(user1.pointsFrom2020)
    );
  }

  /**
   * Presenta un toast con il messaggio passato
   * @param message Messaggio da visualizzare
   */
  private async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  /**
   * Naviga alla pagina con i dettagli dell'utente selezionato
   * @param userName Nome utente
   */
  public goToDetail(userName: string) {
    this.router.navigate(['/presence/userDetail'], {
      queryParams: {
        userName
      }
    });
  }

  /**
   * Passando la stringa dei punti dal 2020 in poi, ritorna il punteggio dell'anno attuale
   * @param pointsFrom2020 Punteggi ottenuti da chiamata nella forma "5,10,1,"
   * @returns Valore del punteggio nell'anno attuale
   */
  public calcolaPuntiAnnoAttuale(pointsFrom2020: string) {
    const puntiSplittati = pointsFrom2020
      .split(',')
      .filter((punteggio) => punteggio !== '')
      .map((punto) => +punto);
    return puntiSplittati[puntiSplittati.length - 1];
  }
}
