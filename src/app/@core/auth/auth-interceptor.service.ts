import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {NbAuthService, NbAuthToken} from '@nebular/auth';
import {MyAuthService} from './my-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: NbAuthService,
    private myAuthService: MyAuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('/auth')) {
      return this.authService.isAuthenticated().pipe(
        switchMap((authenticated: boolean) => {
          if (authenticated) {
            return this.authService.getToken().pipe(
              switchMap((token: NbAuthToken) => {
                const authReq = request.clone({
                  setHeaders: {
                    'Authorization': `Bearer ${token.getValue()}`,
                  },
                });
                return next.handle(authReq);
              }),
            );
          } else {
            this.myAuthService.logout();
          }
        }),
      );
    } else {
      return next.handle(request);
    }
  }

}
