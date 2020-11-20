import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AchievementTag } from '../shared/models/achivment-service';
import { AchievementCheckbox } from 'src/app/shared/models/achivment-service';
import { UsersService } from '../shared/services/users.service';
import { finalize, first } from 'rxjs/operators';
import {
  presenzeCheckbox,
  austriaCheckbox,
  ciboCheckbox,
  varieCheckbox,
  publicRelationsCheckbox
} from './achivment.const';

/**
 * Classe per la gestione della pagina achievement
 */
@Component({
  selector: 'app-achievement',
  templateUrl: './achivment.page.html',
  styleUrls: ['./achivment.page.scss']
})
export class AchievementPage implements OnInit {
  /**
   * Nome utente loggato
   */
  public userName = localStorage.getItem('user');

  /**
   * Flag che indica se è in corso un caricamento
   */
  public isLoading = true;
  /**
   * Stringa che indica quali achievement sono stati ottenuti dall'utente
   */
  private achievement: string;

  /**
   * Array con i totali degli achievement ottenuti in posizione
   * 0: regular
   * 1: argento
   * 2: oro
   */
  public totalAchievements: number[] = [0, 0, 0];

  /**
   * Array di tutti gli achievements
   */
  private achievementsCheckboxes: AchievementCheckbox[][] =
    [presenzeCheckbox, austriaCheckbox, ciboCheckbox, varieCheckbox, publicRelationsCheckbox];

  /**
   * Array delle varie tipologie di achievement
   */
  public achievementTags: AchievementTag[] = [
    {
      name: 'Presenze',
      img: '../../assets/icon/achievement-presenze.jpg',
      position: 0
    },
    {
      name: 'Austria',
      img: '../../assets/icon/achievement-austria.jpg',
      position: 1
    },
    {
      name: 'Cibo',
      img: '../../assets/icon/achievement-cibo.jpg',
      position: 2
    },
    {
      name: 'Varie',
      img: '../../assets/icon/achievement-varie.jpg',
      position: 3
    },
    {
      name: 'Public Relations',
      img: '../../assets/icon/public-relations.jpg',
      position: 4
    }
  ];

  /**
   * Costruttore della classe
   * @param router Istanza di Router
   * @param usersService Istanza di UsersService
   * @param activatedRoute Istanza di ActivatedRoute
   */
  constructor(
    private router: Router,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Metodo onInit della classe. Controlla se è presente un query param per l'username.
   * Se c'è il servizio per gli achievement viene chiamato con esso,
   * altrimenti si chiama per l'utente loggato
   */
  ngOnInit() {
    this.activatedRoute.queryParams.pipe(first()).subscribe((params) => {
      let userName = this.userName;
      if (params.userName) {
        userName = params.userName;
      }

      this.usersService
        .getAchievements(userName)
        .pipe(
          first(),
          finalize(() => (this.isLoading = false))
        )
        .subscribe((response) => {
          if (!response) {
            return;
          }

          this.achievement = response.response.achivment;
          this.totalAchievements = this.calculateTotalAchievements(this.achievement);
        });
    });
  }

  /**
   * Calcola il totale degli achievements suddivisi per rarità
   * @param achievements Achievements ottenuti da chiamata
   */
  private calculateTotalAchievements(achievements: string): number[] {
    if (!achievements) {
      return [0, 0, 0];
    }

    const total = [0, 0, 0];
    const tags = achievements.split(';');
    // Suddivide achievements nelle varie categorie
    tags.forEach((tag, index) => {
      const achievementsList = tag.split(',');
      // Suddivide nei singoli achievements
      achievementsList.forEach(achievement => {
        if (!achievement) {
          return;
        }
        // In base alla rarità aggiorna il contatore
        switch (this.achievementsCheckboxes[index][+achievement].color) {
          case 'success':
            total[0] = total[0] + 1;
            break;
          case 'medium':
            total[1] = total[1] + 1;
            break;
          case 'warning':
            total[2] = total[2] + 1;
        }
      });
    });

    return total;
  }

  /**
   * Metodo per navigare ai dettagli della storia
   */
  public navigateTo(tag: AchievementTag): void {
    this.router.navigate(['/achievement/list'], {
      queryParams: {
        tagName: tag.name,
        tagPosition: tag.position,
        tagValues: this.achievement
      }
    });
  }
}
