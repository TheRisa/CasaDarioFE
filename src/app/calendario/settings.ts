import { EventDetail } from './models/event';
import { AppUser } from '../shared/models/user';

/**
 * Mock per pag calendario
 */
export const event: EventDetail = {
  name: 'Nome evento',
  date: 'Giovedì 21/11/2019',
  eventType: ['sport', 'festa', 'gay', 'casadario']
};

/**
 * Nome icone usate
 */
export const icons: string[] = [
  'basketball',
  'beer',
  'logo-playstation',
  'school',
  'transgender',
  'wine',
  'home',
  'ribbon'
];

/**
 * Mock per utenti
 */
export const user: AppUser = {
  name: 'Dario Risaliti',
  img: 'path img',
  userDescription: 'Ho sempre ragione'
};
