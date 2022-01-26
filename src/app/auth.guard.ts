import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, switchMap, tap, of} from 'rxjs';
import {AuthService} from "./auth.service";
import {AuthQuery} from "./auth/auth.query";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authQuery: AuthQuery, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    // return this.authQuery.isLoggedIn$.pipe(
    //   tap((isLoggedIn: boolean) => { if (!isLoggedIn) {
    //     this.router.navigateByUrl('/auth/login');
    //   }})
    // );

    return this.authQuery.isLoggedIn$.pipe(
      switchMap((isLoggedIn: boolean) => {
        if(isLoggedIn) {
          return of(true);
        }

        return of(this.router.createUrlTree(['/auth/login']))
      })
    )



  }

}
