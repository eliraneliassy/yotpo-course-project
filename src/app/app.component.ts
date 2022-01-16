import { Item } from './item.interface';
import { Component } from '@angular/core';
import {CartService} from "./cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingCart: Item[] = [];
  items: Item[] = [];

  item1: Item = {
    description: 'Playstation 5',
    imageUrl: `https://d3m9l0v76dty0.cloudfront.net/system/photos/6207070/large/cd7c8f87e1dfc8f9e9d0bf50b738adaf.jpg`,
    price: 500
  };

  item2: Item = {
    description: 'Snoker table',
    imageUrl: 'https://www.thailandpooltables.com/pub/media/catalog/product/cache/cd26d59ef39544881f47d6a7b57c93ba/k/e/kensington_10ft_snooker_table_-_thailand_pool_tables.jpg',
    price: 3600
  };

  constructor(private cartService: CartService) {
    this.items = [this.item1];
  }

  addToCart(item: Item): void{
    this.cartService.addToCart(item);
  }

  isInCart(item: Item): boolean {
    return this.cartService.isInCart(item);
  }

  removeFromCart(item: Item): void{
    this.cartService.removeFromCart(item);
  }


}



