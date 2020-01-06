import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

/**
 * Classe per la gestione del componente accesso
 */
@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.scss']
})
export class AccessoComponent {
  /**
   * Valore dell'input per userName
   */
  public userName: string;

  /**
   * Flag per bisabilitare login
   */
  public isLoginDisabled = false;

  /**
   * Valore dell'input per la password
   */
  public psw: string;

  /**
   * Costruttore della classe
   * @param usersService Istanza di UsersService
   * @param router Istanza di Router
   * @param toastController Istanza di ToastController
   */
  constructor(
    private usersService: UsersService,
    private router: Router,
    public toastController: ToastController
  ) {}

  /**
   * Metodo per fare login
   */
  public login() {
    if (!this.userName || !this.psw) {
      this.presentToast('Inserire username e password');
      return;
    }

    this.isLoginDisabled = true;
    this.usersService
      .logIn(this.userName, this.psw)
      .pipe(first())
      .subscribe(response => {
        if (!response.response) {
          this.isLoginDisabled = false;
          this.presentToast('Utente o password errati');
          return;
        }

        if (response.response) {
          this.usersService
            .getUserByUserName(this.userName)
            .pipe(first())
            .subscribe(resp => {
              if (!resp || !resp.response) {
                this.isLoginDisabled = true;
                return;
              }

              localStorage.setItem('userName', this.userName);
              localStorage.setItem(
                'user',
                resp.response.firstName + ' ' + resp.response.lastName
              );
              this.isLoginDisabled = false;
              this.router.navigate(['/loading']);
            });
        }
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
