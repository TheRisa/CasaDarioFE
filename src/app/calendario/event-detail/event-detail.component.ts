import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from 'src/app/shared/models/event-service';
import { InviteService } from 'src/app/shared/services/invite.service';
import { first, finalize } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { InviteModalComponent } from '../invite-modal/invite-modal.component';
import { User } from 'src/app/shared/models/users-service';
import { UsersService } from 'src/app/shared/services/users.service';

/**
 * Classe per la gestione della componente event-detail
 */
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  /**
   * Dettagli evento
   */
  public eventInfo: EventDetail = null;

  /**
   * Flag che indica se è in corso un caricamento
   */
  public isLoading = false;

  /**
   * Data dell'evento
   */
  public eventDateString: string;

  /**
   * Valore attuale del segment
   */
  public segmentValue: string;

  /**
   * Informazioni sugli utenti confermati
   */
  public confirmedUsers: User[] = [];

  /**
   * Flag che indica se il button è disabilitato
   */
  public isButtonDisabled = true;

  /**
   * UserName utente loggato
   */
  public user = localStorage.getItem('user');
  /**
   * Username utente loggato
   */
  private userName = localStorage.getItem('userName');

  /**
   * Costruttore della classe
   * @param router Istanza di ActivedRoute
   * @param inviteService Istanza di InviteService
   * @param modalController Istanza di ModalController
   * @param usersService Istanza di UsersService
   */
  constructor(
    private router: ActivatedRoute,
    private inviteService: InviteService,
    public modalController: ModalController,
    private usersService: UsersService
  ) {}

  /**
   * Metodo onInit della classe
   */
  ngOnInit() {
    this.isLoading = false;
    this.isButtonDisabled = true;
    this.router.queryParams.subscribe(params => {
      this.eventInfo = {
        id: params.id,
        date: params.date,
        initHour: params.initHour,
        description: params.description,
        place: params.place,
        name: params.name,
        creator: this.userName,
        type: [],
        isConfirmed: params.isConfirmed === 'true'
      };
      this.segmentValue = params.isConfirmed === 'true' ? 'yes' : 'no';

      const eventDate = new Date(this.eventInfo.date);
      const time = this.eventInfo.initHour.split(':');
      eventDate.setHours(+time[0], +time[1], +time[0]);
      const options = {
        weekday: 'long',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      this.eventDateString = eventDate.toLocaleString('it-IT', options);

      this.inviteService
        .getInvitedAndConfirmedUsers(this.eventInfo.id)
        .pipe(first())
        .subscribe(response => {
          if (!response && !response.response) {
            return;
          }
          const users = response.response.filter(
            user => user !== this.userName
          );
          if (users.length === 0) {
            this.isButtonDisabled = false;
            return;
          }
          users.forEach((userName, index) => {
            this.usersService
              .getUserByUserName(userName)
              .pipe(
                first(),
                finalize(() => {
                  if (index + 1 === users.length) {
                    this.isButtonDisabled = false;
                  }
                })
              )
              .subscribe(user => {
                if (!user && !user.response) {
                  return;
                }
                this.confirmedUsers.push(user.response);
              });
          });
        });
    });
  }

  /**
   * Metodo attivato al cambio di segment
   * @param $event Evento di cambio segment
   */
  public segmentChanged($event: any) {
    this.isLoading = true;
    switch ($event.detail.value) {
      case 'yes':
        if (!this.eventInfo.isConfirmed) {
          this.inviteService
            .setInviteConfirm(this.eventInfo.id, this.userName, true)
            .pipe(
              first(),
              finalize(() => (this.isLoading = false))
            )
            .subscribe(() => (this.eventInfo.isConfirmed = true));
        } else {
          this.isLoading = false;
        }
        break;
      case 'no':
        if (this.eventInfo.isConfirmed) {
          this.inviteService
            .setInviteConfirm(this.eventInfo.id, this.userName, false)
            .pipe(
              first(),
              finalize(() => (this.isLoading = false))
            )
            .subscribe(() => (this.eventInfo.isConfirmed = false));
        } else {
          this.isLoading = false;
        }
        break;
      default:
        break;
    }
  }

  /**
   * Metodo per aprire la modale di invito
   */
  public async presentModal() {
    const modal = await this.modalController.create({
      component: InviteModalComponent,
      cssClass: 'inviteModal',
      componentProps: {
        usersInfoModified: this.confirmedUsers
      }
    });
    return await modal.present();
  }
}
