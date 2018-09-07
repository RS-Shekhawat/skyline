export interface ILogin {
  role_id?: number;
  email: string;
  password: string;
}

export class Login implements ILogin {
  role_id: number;
  email: string;
  password: string;
  device_type = 'w';
  device_token = '0';

  constructor(props: ILogin) {
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        this[prop] = props[prop];
      }
    }
  }
}
