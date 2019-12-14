import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AskMeService } from '../shared/services/ask-me.service';
import { ToastController } from '@ionic/angular';
import { catchError, finalize } from 'rxjs/operators';

/**
 * Classe per la gestione del componente ask-me
 */
@Component({
  selector: 'app-ask-me',
  templateUrl: './ask-me.page.html',
  styleUrls: ['./ask-me.page.scss']
})
export class AskMePage implements OnInit {
  /**
   * Flag per il caricamento
   */
  public isLoading = false;

  /**
   * Titolo richiesta
   */
  public title: string;

  /**
   * Body richiesta
   */
  public body: string;

  /**
   * Nome utente loggato
   */
  public userName = environment.userName;

  /**
   * Costruttore della classe
   * @param askmeService Istanza di AskMeService
   * @param toastController Istanza di ToastController
   */
  constructor(
    private askmeService: AskMeService,
    private toastController: ToastController
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}

  /**
   * Chiama il servizio per aggiungere un todo
   */
  public sendTodo(): void {
    this.isLoading = true;
    this.askmeService
      .addAskme(this.title, this.body)
      .pipe(
        catchError(() => this.presentToastr(`Errore nell'invio`)),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(response => {
        if (response && response.response) {
          this.presentToastr('Inviato con successo');
          this.title = '';
          this.body = '';
        } else {
          this.presentToastr(`Errore nell'invio`);
        }
      });
  }

  /**
   * Fa apparire un toast con il messaggio passato
   * @param message Messaggio da visualizzare
   */
  private async presentToastr(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
