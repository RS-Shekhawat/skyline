import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../services/auth.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        const data = event as any;
        if (data.hasOwnProperty('body') && data.body.hasOwnProperty('type')) {
          if (data.body.type === false) {
            this.toastr.error(data.body.message);

            if (data.body.message === 'Please login') {
              if (req.url.match(/\/admin\//)) {
                this.auth.logout();
              } else {
                this.router.navigate(['/login']);
              }

            }

            return false;
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
          } else if (err.status === 0) {
            this.toastr.error('Request to server failed');
          }
        }
      })
    );
  }
}
