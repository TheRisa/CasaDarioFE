import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/shared/models/users-service';

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
   * Copia di userInfo usata per visualizzare le selezioni senza modificare l'originale
   */
  @Input() usersInfoModified: User[];

  /**
   * Flag che indica se la modalità della modale è invito o visualizzazione
   */
  @Input() isInviting: boolean;

  /**
   * Informazioni effettivamente visualizzate
   */
  public displayedUsers: User[] = [];

  /**
   * User da cercare
   */
  public search = '';

  /**
   * Usata per clonare usersInfoModified, viene restituita al componente se si clicca su annulla
   */
  private usersInfoModifiedClone: User[] = [];

  /**
   * Costruttore della classe
   * @param modalController Istanza di ModalController
   */
  constructor(public modalController: ModalController) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit(): void {
    this.usersInfoModified.forEach(user => {
      const tmpUser = new User();
      tmpUser.description = user.description;
      tmpUser.firstName = user.firstName;
      tmpUser.gayPoint = user.gayPoint;
      tmpUser.isInvited = user.isInvited;
      tmpUser.lastName = user.lastName;
      tmpUser.monthPoint = user.monthPoint;
      tmpUser.totalPoint = user.totalPoint;
      tmpUser.userName = user.userName;
      this.usersInfoModifiedClone.push(tmpUser);
      this.displayedUsers.push(tmpUser);
    });
  }

  /**
   * Metodo che cambia lo stato di isInvited all'utente selezionato
   * @param selectedUser Utente selezionato
   */
  public selectUser(selectedUser: string): void {
    let search = this.usersInfoModified.filter(
      user => user.userName === selectedUser
    );
    if (search.length >= 0) {
      const isInvited = !search[0].isInvited;
      search[0].isInvited = isInvited;
      search = this.displayedUsers.filter(
        user => user.userName === selectedUser
      );
      if (search.length >= 0) {
        search[0].isInvited = isInvited;
      }
    }
  }

  /**
   * Metodo per chiudere la modale
   * @param isConfirmed Flag per indicare se la selezione è stata confermata o annullata
   */
  public close(isConfirmed: boolean): void {
    if (isConfirmed) {
      this.modalController.dismiss({
        usersInfo: this.usersInfoModified
      });
    } else {
      this.modalController.dismiss({
        usersInfo: this.usersInfoModifiedClone
      });
    }
  }

  /**
   * Metodo per fare la ricerca sugli utenti
   */
  public filterUsers(): void {
    this.displayedUsers = this.usersInfoModified;
    if (!this.search || this.displayedUsers.length === 0) {
      return;
    }

    this.displayedUsers = this.displayedUsers.filter(user => {
      return (
        user.firstName.search(this.search) === 0 ||
        user.lastName.search(this.search) === 0
      );
    });
  }
}
