import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {StorageService} from './storage.service';
import {Login} from '../models/login.model';
import {ApiEndpoint} from '../app.constants';
import {Observable} from 'rxjs';
import {IResponse} from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService,
    private userService: UserService
  ) { }

  public getToken(): string {
    return this.storage.getItem<string>('token');
  }

  public setToken(token: string) {
    this.storage.setItem('token', token);
  }

  public removeToken() {
    this.storage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public authenticate(data: Login): Observable<IResponse<any>> {
    return this.http.post<IResponse<any>>(`${ApiEndpoint}/admin/signIn`, data);
  }

  public logout() {
    this.removeToken();
    this.userService.removeCurrentUser();
    this.router.navigate(['/admin/auth/login']);
  }

}
