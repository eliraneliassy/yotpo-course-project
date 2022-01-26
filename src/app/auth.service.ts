import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthState, AuthStore} from "./auth/auth.store";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private authStore: AuthStore) {

  }

  login(userName: string) {
    // this._userName = userName;

    this.authStore.update((currentAuthState: AuthState) => ({...currentAuthState, username: userName}))
  }

  logout() {
    this.authStore.update((currentAuthState: AuthState) => ({...currentAuthState, username: null}))

    this.router.navigateByUrl('/auth/login');
  }


}
