import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private _userName: string | null = null;

  public get userName(): string | null {
    return this._userName;
  }

  public set userName(user: string | null) {
    this._userName = user;
  }

  constructor(private router: Router) {

  }

  login(userName: string) {
    this._userName = userName;
  }

  logout() {
    this._userName = null;
    this.router.navigateByUrl('/login');
  }


}
