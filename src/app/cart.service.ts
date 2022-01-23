import { Injectable } from '@angular/core';
import {Item} from "./item.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Item[] = [];

  constructor() { }

  addToCart(item: Item){
    this.shoppingCart.push(item);
  }

  isInCart(item: Item) {
    const index = this.shoppingCart.findIndex((x: Item) => x.id === item.id);
    if(index > -1){
      return true
    }

    return false;
  }

  removeFromCart(item: Item){
    const index = this.shoppingCart.findIndex((x: Item) => x.id === item.id);
    this.shoppingCart.splice(index, 1);
  }
}
