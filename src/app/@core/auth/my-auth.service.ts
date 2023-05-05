import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NbAuthService} from '@nebular/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MyAuthService {

  constructor(
    private http: HttpClient,
    private authService: NbAuthService,
    private router: Router,
  ) { }

  public logout() {
    localStorage.removeItem('auth_app_token');
    this.router.navigate(['/auth/login']);
  }
}
