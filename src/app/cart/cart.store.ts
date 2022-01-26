import { Store, StoreConfig } from '@datorama/akita';
import {Injectable} from "@angular/core";
import {Item} from "../item.interface";

export interface CartState {
  items: Item[];
}

export function createInitialState(): CartState {
  return {
    items: [],
  };
}


@StoreConfig({ name: 'cart' })
@Injectable({
  providedIn: 'root'
})
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
