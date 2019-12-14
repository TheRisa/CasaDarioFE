import { Component, OnInit } from '@angular/core';
import { FabButton } from '../models/fab-button';
import { FabButtonTopList, FabButtonLeftList } from './settings';
import { ModalController, ToastController } from '@ionic/angular';
import { InviteModalComponent } from '../invite-modal/invite-modal.component';
import { environment } from 'src/environments/environment';
import { CreateEventBody } from 'src/app/shared/models/event-service';
import { EventService } from 'src/app/shared/services/event.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared/models/users-service';
import { InviteService } from 'src/app/shared/services/invite.service';
import { Router } from '@angular/router';

/**
 * Classe per la gestione del componente info
 */
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  /**
   * Fab button superiori per insierire il tipo di evento
   */
  public fabButtonsTop: FabButton[] = FabButtonTopList;

  /**
   * Disabilita pulsanti durante il caricamento
   */
  public isPageDisabled = false;

  /**
   * Nome evento da input
   */
  public eventName: string;
  /**
   * Nome evento da input
   */
  public eventPlace: string;
  /**
   * Nome evento da input
   */
  public eventDescription: string;
  /**
   * Nome evento da input
   */
  public eventDate: string;
  /**
   * Nome evento da input
   */
  public eventInitHour: string;
  /**
   * Data minima del datepicker
   */
  public minDate: string = new Date().toISOString();
  /**
   * Data massima inseribile nel datepicker
   */
  public maxDate: any = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  ).toISOString();

  /**
   * Nome utente loggato
   */
  public userName = environment.userName;
  /**
   * UserName utente loggato
   */
  private user = environment.user;

  /**
   * Utente attuale (da reinserire nella lista prima della chiamata)
   */
  private actualUser: User;

  /**
   * Informazioni sugli utenti
   */
  public usersInfo: User[] = [];

  /**
   * Fab button superiori per insierire il tipo di evento
   */
  public fabButtonsLeft: FabButton[] = FabButtonLeftList;

  /**
   * Costruttore della classe
   * @param modalController Istanza di ModalController
   * @param eventService Istanza di EventService
   * @param toastController Istanza di ToastController
   * @param inviteService Istanza di InviteService
   * @param router Istanza di Router
   */
  constructor(
    public modalController: ModalController,
    private eventService: EventService,
    private userService: UsersService,
    private toastController: ToastController,
    private inviteService: InviteService,
    private router: Router
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.userService
      .getAllUser()
      .pipe(first())
      .subscribe(response => {
        this.usersInfo = response.response;
        this.usersInfo.map(userInfo => (userInfo.isInvited = false));
        this.actualUser = this.usersInfo
          .filter(userInfo => userInfo.userName === this.user)
          .pop();
        this.actualUser.isInvited = true;
        this.usersInfo = this.usersInfo.filter(
          userInfo => userInfo.userName !== this.user
        );
      });
  }

  /**
   * Selezione/deseleziona il pulsante (lato suoeriore)
   * @param index Indice del fab button
   */
  public selectFabTop(index: number) {
    this.fabButtonsTop[index].isSelected = !this.fabButtonsTop[index]
      .isSelected;
  }

  /**
   * Selezione/deseleziona il pulsante (lato sinistro)
   * @param index Indice del fab button
   */
  public selectFabLeft(index: number) {
    this.fabButtonsLeft[index].isSelected = !this.fabButtonsLeft[index]
      .isSelected;
  }

  /**
   * Metodo per aprire la modale di invito
   */
  public async presentModal() {
    const modal = await this.modalController.create({
      component: InviteModalComponent,
      cssClass: 'inviteModal',
      componentProps: {
        usersInfoModified: this.usersInfo
      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data.usersInfo) {
        this.usersInfo = data.data.usersInfo;
      }
    });
    return await modal.present();
  }

  /**
   * Metodo chiamato per creare un evento
   */
  public createEvent() {
    this.isPageDisabled = true;

    // Apre toastr se c'è un errore nell'inserimento
    if (!this.isDateCorrect()) {
      this.presentToastr(`Devi inserire una data non passata`);
      this.isPageDisabled = true;
      return;
    }
    if (!this.isInitHourCorrect()) {
      this.presentToastr(`Devi inserire un orario`);
      this.isPageDisabled = true;
      return;
    }
    if (!this.eventName || !this.eventPlace) {
      this.presentToastr(`Mancano delle informazioni da inserire`);
      this.isPageDisabled = true;
      return;
    }

    // Init del body per la chiamata
    const body: CreateEventBody = {
      creator: this.user,
      date: this.isDateCorrect(),
      description: this.eventDescription ? this.eventDescription : '',
      initHour: this.isInitHourCorrect(),
      name: this.eventName,
      place: this.eventPlace,
      type: ''
    };
    // Aggiunge i tipi dell'evento
    this.fabButtonsLeft.forEach(fab => {
      if (fab.isSelected) {
        body.type = `${body.type},${this.eventService.convertToIconName(
          fab.icon
        )}`;
      }
    });
    this.fabButtonsTop.forEach(fab => {
      if (fab.isSelected) {
        body.type = `${body.type},${this.eventService.convertToIconName(
          fab.icon
        )}`;
      }
    });

    // Chiama il servizio per creare l'evento
    this.eventService
      .createEvent(body)
      .pipe(first())
      .subscribe(response => {
        if (!response) {
          this.presentToastr(
            `Qualcosa è andato storto durante la creazione dell'evento`
          );
          this.isPageDisabled = false;
          return;
        }

        // Filtra gli utenti in base all'invito
        const invitedUsers = this.usersInfo.filter(
          userInfo => userInfo.isInvited
        );
        // Aggiunge l'utente attuale agli invitati
        invitedUsers.push(this.actualUser);
        // Per ogni invitato chiama il servizio per creare l'invito
        invitedUsers.forEach(invited => {
          this.inviteService
            .createInvite(invited.id, response.response)
            .pipe(first())
            .subscribe(res => {
              if (!res) {
                this.presentToastr(
                  `Errore nell'invito di ${invited.firstName} ${invited.lastName}`
                );
              }
            });
        });
        // Apre toastr e torna a calendario
        this.presentToastr('Evento creato. Ricarica la pagina per vederlo!');
        this.router.navigate(['/calendario']);
      });
  }

  /**
   * Controlla che la data sia nella forma corretta e la restituisce per la chiamata
   */
  private isDateCorrect(): string {
    // Controllo che la data non sia già passata
    const date = new Date();
    const inputDate = new Date(this.eventDate);
    if (inputDate.getFullYear() < date.getFullYear()) {
      return null;
    } else if (inputDate.getMonth() < date.getMonth()) {
      return null;
    } else if (inputDate.getDate() < date.getDate()) {
      return null;
    } else {
      // Data corretta
      return `${inputDate.getFullYear()}-${inputDate.getMonth() +
        1}-${inputDate.getDate()}`;
    }
  }
  /**
   * Restituisce l'ora nella forma corretta per la chiamata
   */
  private isInitHourCorrect(): string {
    const initHour = new Date(this.eventInitHour);
    console.log(`${initHour.getHours()}:${initHour.getMinutes()}:00`);
    return `${initHour.getHours()}:${initHour.getMinutes()}:00`;
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

  // TODO: non far chiudere fab button alla selezione
}
