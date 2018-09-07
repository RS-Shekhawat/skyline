import {environment} from '../environments/environment';
import {Role} from './models/role.model';

const isDev = !environment.production;

export const ApiEndpoint = isDev ? 'http://192.168.0.198:4143' : 'http://202.157.76.19:4143';
export const AssetUrl = isDev ? 'http://192.168.0.198:4143' : 'http://202.157.76.19:4143';

export const TABLES = {
  Users: 'users',
};

export const ROLE_LABELS: {[key: string]: string} = {
  [Role.superAdmin]: 'Admin',
  [Role.charter]: 'Charter',
  [Role.transport]: 'Carrier',
  [Role.driver]: 'Driver'
};
