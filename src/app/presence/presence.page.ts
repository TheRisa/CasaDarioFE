import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { first, finalize } from 'rxjs/operators';
import { User } from '../shared/models/users-service';
import { ToastController } from '@ionic/angular';

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
   */
  constructor(
    private usersService: UsersService,
    private toastController: ToastController
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = true;
    this.usersService
      .getAllUser()
      .pipe(
        first(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.actualUserInfo = response.response
          .filter(user => user.userName === this.userName)
          .pop();
        this.usersInfo = response.response;
      });

    this.usersService
      .getProfileImg(this.userName)
      .pipe(first())
      .subscribe(img => {
        if (!img.response) {
          this.imgUrl = '../../assets/icon/img-error.png';
          this.presentToast(`Errore nel caricamento dell'immagine`);
          return;
        }

        this.imgUrl = img.response;
      });
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
