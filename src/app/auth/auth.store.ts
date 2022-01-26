import { Store, StoreConfig } from '@datorama/akita';
import {Injectable} from "@angular/core";

export interface AuthState {
  username: string | null;
}

export function createInitialState(): AuthState {
  return {
    username: null,
  };
}


@StoreConfig({ name: 'auth' })
@Injectable({
  providedIn: 'root'
})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
