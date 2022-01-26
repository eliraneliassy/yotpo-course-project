import { Injectable } from '@angular/core';
import {Item} from "./item.interface";
import {CartStore} from "./cart/cart.store";
import {CartQuery} from "./cart/cart.query";
import {asyncScheduler, map, Observable, of, switchMap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cartStore: CartStore, private cartQuery: CartQuery) { }

  addToCart(item: Item){
    // this.shoppingCart.push(item);
    this.cartStore.update(store => ({...store, items: [item, ...store.items]}))


  }

  isInCart(item: Item): Observable<boolean> {
    return this.cartQuery.selectItemsInCart$.pipe(
      map((itemsIcCart: Item[]) => {
        const index = itemsIcCart.findIndex((x: Item) => x.id === item.id);

        if(index > -1) {
          return true;
        }

        return false;
      })
    )
    // const index = this.shoppingCart.findIndex((x: Item) => x.id === item.id);
    // if(index > -1){
    //   return true
    // }
    //
    // return false;
  }

  removeFromCart(item: Item){
    this.cartStore.update((store) => {
      const index = store.items.findIndex((x: Item) => x.id === item.id);

      const items = [...store.items];
      items.splice(index, 1);

      return {...store, items};
    })
    // const index = this.shoppingCart.findIndex((x: Item) => x.id === item.id);
    // this.shoppingCart.splice(index, 1);
  }
}
