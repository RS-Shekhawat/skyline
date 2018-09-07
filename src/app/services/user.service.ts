import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageService} from './storage.service';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {IRecordPage, IResponse} from '../models/response.model';
import {ApiEndpoint} from '../app.constants';
import {Role} from '../models/role.model';
import {SortOrder} from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage: StorageService,
              private http: HttpClient) {
  }

  getCurrentUser(): User {
    return this.storage.getItem<User>('user');
  }

  setCurrentUser(user: User) {
    this.storage.setItem('user', user);
  }

  removeCurrentUser() {
    this.storage.removeItem('user');
  }

  getUsers(params: {
    page: number,
    role_id: Role,
    status?: number[],
    searchKey?: string,
    sortkey?: string,
    order?: SortOrder
  }): Observable<IRecordPage<User[]>> {
    return this.http.get<IRecordPage<User[]>>(`${ApiEndpoint}/admin/users`, {
      params: params as any
    });
  }

  getUser(id: number): Observable<IResponse<User>> {
    return this.http.get<IResponse<User>>(`${ApiEndpoint}/admin/usersDetail/${id}`);
  }

  saveUser(user: User): Observable<IResponse<User>> {
    const id = user.id || 'add';
    return this.http.post<IResponse<User>>(`${ApiEndpoint}/admin/addEditUser/${id}`, user);
  }

}
