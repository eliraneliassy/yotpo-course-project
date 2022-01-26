import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Item} from "../item.interface";
import {CartQuery} from "./cart.query";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  shoppingCart$: Observable<Item[]> = new Observable<Item[]>();

  constructor(private cartService: CartService, private cartQuery: CartQuery) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.cartQuery.selectItemsInCart$;

  }

  removeFromCart(item: Item){
    this.cartService.removeFromCart(item);
  }

}
