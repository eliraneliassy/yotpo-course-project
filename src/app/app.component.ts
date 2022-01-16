import { Item } from './item.interface';
import { Component } from '@angular/core';

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

  constructor() {
    this.items = [this.item1, this.item2];
  }

  addToCart(item: Item){
    this.shoppingCart.push(item);
  }


}



