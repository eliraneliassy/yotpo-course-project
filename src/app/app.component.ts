import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthQuery} from "./auth/auth.query";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  username: string | null = null;

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private authQuery: AuthQuery) {
    this.authQuery.username$.subscribe(username => this.username = username);
    this.authQuery.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  login() {
    this.authService.login('Kalo');
  }

  logout(){
    this.authService.logout();
  }




}



