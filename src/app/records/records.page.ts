import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { finalize, first } from 'rxjs/operators';

import { RecordCasadario } from '../shared/models/record-service';
import { HistoryService } from '../shared/services/history.service';

/** Classe per la gestione della pagina dei record */
@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss']
})
export class RecordsPage implements OnInit {
  /**
   * Informazioni sui record
   */
  public recordsInfo: RecordCasadario[] = [];

  /**
   * Flag che indica se è in corso un caricamento
   */
  public isLoading = true;

  /**
   * Username utente loggato
   */
  public userName = localStorage.getItem('userName');
  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

  /**
   * Costruttore della classe
   * @param historyService Istanza di HistoryService
   * @param toastController Istanza di ToastController
   */
  constructor(
    private historyService: HistoryService,
    private toastController: ToastController
  ) {}

  /**
   * Metodo onInit
   */
  ngOnInit(): void {
    this.historyService
      .recuperaRecord()
      .pipe(
        first(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((response) => {
        if (!response) {
          return;
        } else {
          this.recordsInfo = response.response;
        }
      });
  }

  /**
   * Apre toast per info records
   */
  public openRecordsInfo(): void {
    this.presentToast(
      `I record di CasaDario sono registrati a partire dalla data 19/11/2021. Ogni record retrodatato non sarà considerato. Per registrare un nuovo record, si prega di contattare l'ufficiante preposto (Dario Risaliti)`
    );
  }

  /**
   * Presenta un toast con il messaggio passato
   * @param message Messaggio da visualizzare
   */
  private async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 6000
    });
    toast.present();
  }
}
