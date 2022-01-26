import { Query } from '@datorama/akita';
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {CartState, CartStore} from "./cart.store";
import {Item} from "../item.interface";

@Injectable({
  providedIn: 'root'
})
export class CartQuery extends Query<CartState> {

  selectItemsInCart$: Observable<Item[]> = this.select('items');

  selectNumOfItems$: Observable<number> = this.selectItemsInCart$.pipe(
    map((items: Item[]) => items.length)
  )

  constructor(protected override store: CartStore) {
  super(store);
}


}
