import { EventDetail } from './models/event';
import { AppUser } from '../shared/models/user';

/**
 * Mock per pag calendario
 */
export const event: EventDetail = {
  name: 'Ritrovo da Dario',
  date: new Date().getTime(),
  eventType: ['sport', 'festa', 'gay', 'casadario'],
  eventPlace: 'CasaDario',
  eventDescription: 'Cazzeggio casaDario'
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
