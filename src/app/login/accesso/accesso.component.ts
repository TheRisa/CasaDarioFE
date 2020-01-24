import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { first, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CuriosityService } from 'src/app/shared/services/curiosity.service';

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
    public toastController: ToastController
  ) {}

  /**
   * Metodo on init del componente
   */
  ngOnInit() {}

  /**
   * Metodo per fare login
   */
  public login() {
    if (!this.userName || !this.psw) {
      this.presentToast('Inserire username e password');
      return;
    }

    this.userName = this.userName.split(' ')[0];
    this.isLoginDisabled = true;
    this.usersService
      .logIn(this.userName, this.psw)
      .pipe(
        first(),
        finalize(() => (this.isLoginDisabled = false))
      )
      .subscribe(response => {
        if (!response.response) {
          this.isLoginDisabled = false;
          this.presentToast('Utente o password errati');
          return;
        }

        localStorage.setItem('userName', this.userName);
        localStorage.setItem('password', this.psw);
        localStorage.setItem('user', this.userName);
        this.curiosityService
          .getCuriosity()
          .pipe(
            first(),
            finalize(() => {
              this.isLoginDisabled = false;
              this.router.navigate(['loading'], {
                queryParams: {
                  curiosity: this.curiosity
                    ? this.curiosity
                    : `Quest'app lagga perché è gratis`
                }
              });
            })
          )
          .subscribe(resp => {
            if (!resp) {
              this.curiosity = `Quest'app lagga, abbi pazienza...`;
              return;
            }

            this.curiosity = resp.response;
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
}
