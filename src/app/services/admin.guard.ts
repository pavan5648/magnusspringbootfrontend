import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router) {

  }

  // creating Guard for validating admin is loggedin or not 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // if loggedIn return true value
    if (this.login.isLoggedIn()) {
      return true;
    }


    // if not loggedIn then redirect to login page 
    this.router.navigate(['login'])
    return false;
  }

}
