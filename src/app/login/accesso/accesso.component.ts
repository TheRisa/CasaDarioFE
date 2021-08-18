import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { first, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CuriosityService } from 'src/app/shared/services/curiosity.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

/**
 * Classe per la gestione del componente accesso
 */
@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.scss']
})
export class AccessoComponent implements OnInit {
  /**
   * Valore dell'input per userName
   */
  public userName: string = localStorage.getItem('userName');

  /**
   * Flag per bisabilitare login
   */
  public isLoginDisabled = false;
  /**
   * Flag per visibilità login
   */
  public isLoginVisible = false;

  /**
   * Valore dell'input per la password
   */
  public psw: string = localStorage.getItem('password');

  /**
   * Curiosità da passare a loading
   */
  private curiosity: string;

  /**
   * Costruttore della classe
   * @param usersService Istanza di UsersService
   * @param router Istanza di Router
   * @param curiosityService Istanza di CuriosityService
   * @param toastController Istanza di ToastController
   */
  constructor(
    private usersService: UsersService,
    private router: Router,
    private curiosityService: CuriosityService,
    public toastController: ToastController,
    private oneSignal: OneSignal
  ) {}

  /**
   * Metodo on init del componente
   */
  ngOnInit() {
    this.curiosityService
      .getCuriosity()
      .pipe(
        first(),
        finalize(() => (this.isLoginVisible = true))
      )
      .subscribe((resp) => {
        if (!resp) {
          this.curiosity = `Quest'app lagga, abbi pazienza...`;
          return;
        }

        this.curiosity = resp.response;
      });
  }

  /**
   * Metodo per fare login
   */
  public login() {
    if (!this.userName || !this.psw) {
      this.presentToast('Inserire username e password');
      return;
    }

    this.isLoginDisabled = true;
    this.userName = this.userName.split(' ')[0];
    this.usersService
      .logIn(this.userName, this.psw)
      .pipe(
        first(),
        finalize(() => {
          this.isLoginDisabled = false;
        })
      )
      .subscribe((response) => {
        if (!response.response) {
          this.isLoginDisabled = false;
          this.presentToast('Utente o password errati');
          return;
        }

        localStorage.setItem('userName', this.userName);
        localStorage.setItem('password', this.psw);
        localStorage.setItem('user', this.userName);

        this.setNotification();
        this.router.navigate(['loading'], {
          queryParams: {
            curiosity: this.curiosity
              ? this.curiosity
              : `Quest'app lagga perché è gratis`
          }
        });
      });
  }

  /**
   * Metodo per presentare un toast
   */
  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  /**
   * Recupera utente e imposta playerId se non presente
   */
  private setNotification(): void {
    // Servizio recupero dati utente
    this.usersService.getUserByUserName(this.userName).subscribe((user) => {
      if (user.response) {
        // Mi registro su oneSignal
        this.oneSignal.startInit(
          'ab272d12-7692-4ba6-994f-99c3f402313b',
          '141015196673'
        );

        this.oneSignal.endInit();

        // Mi registro sul mio be
        this.oneSignal
          .getIds()
          .then((id: { pushToken: string; userId: string }) => {
            this.usersService
              .updatePlayerId(this.userName, id.userId)
              .subscribe();
          });
      }
    });
  }
}
