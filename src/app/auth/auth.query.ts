import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {

  authState$: Observable<AuthState> = this.select();

  username$: Observable<string | null> = this.select('username');

  isLoggedIn$: Observable<boolean> = this.username$.pipe(
    map((username) => !!username)
  );

  constructor(protected override store: AuthStore) {
    super(store);
  }


}
