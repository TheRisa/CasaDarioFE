import { Component, OnInit, Input } from '@angular/core';
import { AppUser } from 'src/app/shared/models/user';
import { ModalController } from '@ionic/angular';

/**
 * Classe per la gestione della modale invite-modal
 */
@Component({
  selector: 'app-invite-modal',
  templateUrl: './invite-modal.component.html',
  styleUrls: ['./invite-modal.component.scss']
})
export class InviteModalComponent implements OnInit {
  /**
   * Array di utenti
   */
  @Input() usersInfo: AppUser[];

  /**
   * Costruttore della classe
   * @param modalController Istanza di ModalController
   */
  constructor(public modalController: ModalController) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {}

  /**
   * Metodo che cambia lo stato di isInvited all'utente selezionato
   * @param selectedUser Utente selezionato
   */
  public selectUser(selectedUser: AppUser): void {
    const search = this.usersInfo.indexOf(selectedUser);
    if (search >= 0) {
      this.usersInfo[search].isInvited = !this.usersInfo[search].isInvited;
    }
  }

  /**
   * Metodo per chiudere la modale
   */
  public closeModal(): void {
    this.modalController.dismiss({
      usersInfo: this.usersInfo
    });
  }
}
