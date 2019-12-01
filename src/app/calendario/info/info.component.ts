import { Component, OnInit, ViewChild } from '@angular/core';
import { FabButton } from '../models/fab-button';
import { FabButtonTopList, FabButtonLeftList, user } from './settings';
import { ModalController } from '@ionic/angular';
import { InviteModalComponent } from '../invite-modal/invite-modal.component';
import { AppUser } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

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
   * Nome utente loggato
   */
  public userName = environment.userName;

  /**
   * Informazioni sugli utenti
   */
  public usersInfo: AppUser[] = [
    user,
    user,
    user,
    user,
    user,
    user,
    user,
    user
  ];

  /**
   * Fab button superiori per insierire il tipo di evento
   */
  public fabButtonsLeft: FabButton[] = FabButtonLeftList;

  /**
   * Costruttore della classe
   * @param modalController Istanza di ModalController
   */
  constructor(public modalController: ModalController) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.usersInfo.map(userInfo => (userInfo.isInvited = false));
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
  async presentModal() {
    const modal = await this.modalController.create({
      component: InviteModalComponent,
      cssClass: 'inviteModal',
      componentProps: {
        usersInfo: this.usersInfo
      }
    });
    modal.onDidDismiss().then(data => {
      console.log(data.data);
      this.usersInfo = data.data.usersInfo;
    });
    return await modal.present();
  }

  // TODO: non far chiudere fab button alla selezione
}
