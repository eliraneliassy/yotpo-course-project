import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthQuery} from "./auth/auth.query";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {CartQuery} from "./cart/cart.query";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  username$: Observable<string | null> = new Observable<string | null>();

  isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  numOfItemsInCart$: Observable<number> = new Observable<number>();

  search$: Subject<string> = new Subject<string>();

  constructor(private authService: AuthService, private authQuery: AuthQuery, private cartQuery: CartQuery,
              private httpClient: HttpClient) {
    this.username$ = this.authQuery.username$;
    this.isLoggedIn$ = this.authQuery.isLoggedIn$;
    this.numOfItemsInCart$ = this.cartQuery.selectNumOfItems$

    this.search$
      .pipe(debounceTime(300), distinctUntilChanged(),
        switchMap((term: string) => this.httpClient.get(`https://www.asos.com/api/product/search/v2/suggestions?country=IL&keyStoreDataversion=hgk0y12-29&lang=en-GB&limit=10&q=${term}&store=ROW`)))
      .subscribe(console.log)

  }

  login() {
    this.authService.login('Kalo');
  }

  logout(){
    this.authService.logout();
  }

  search(term: string) {
    // this.httpClient.get(`/suggestions/${term}`).subscribe()
    this.search$.next(term);
  }




}



