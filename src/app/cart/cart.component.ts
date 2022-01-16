import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Item} from "../item.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCart: Item[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shoppingCart = this.cartService.shoppingCart;

  }

}
