import { FabButton } from '../models/fab-button';
import { AppUser } from 'src/app/shared/models/user';

/**
 * Mock per utenti
 */
export const user: AppUser = {
  name: 'Dario Risaliti',
  img: 'path img',
  userDescription: 'Ho sempre ragione'
};

/**
 * Lista di button per l'inserimento del tipo di evento (lato superiore)
 */
export const FabButtonTopList: FabButton[] = [
  {
    icon: 'basketBall',
    isSelected: false
  },
  {
    icon: 'beer',
    isSelected: false
  },
  {
    icon: 'ribbon',
    isSelected: false
  },
  {
    icon: 'logo-playstation',
    isSelected: false
  }
];

/**
 * Lista di button per l'inserimento del tipo di evento (lato sinistro)
 */
export const FabButtonLeftList: FabButton[] = [
  {
    icon: 'transgender',
    isSelected: false
  },
  {
    icon: 'wine',
    isSelected: false
  },
  {
    icon: 'home',
    isSelected: false
  }
];
