import {Role} from './role.model';

export interface User {
  id: number;
  employer_id?: number;
  role_id?: Role;
  user_name: string;
  image: string;
  email?: string;
  phone: string;
  status: number;
  created: string;
}
