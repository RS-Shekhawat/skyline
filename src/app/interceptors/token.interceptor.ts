import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = {
      'Content-Type': 'application/json'
    };

    const token = this.auth.getToken();
    if (token) {
      headers['Authorization'] = token;
    }

    req = req.clone({
      setHeaders: headers
    });

    return next.handle(req);

  }

}
