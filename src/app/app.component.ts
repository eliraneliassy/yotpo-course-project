import {Item, Item2} from './item.interface';
import { Component } from '@angular/core';
import {CartService} from "./cart.service";
import {PostsService} from "./posts.service";
import {observeOn, of} from 'rxjs';
import {asyncScheduler} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingCart: Item[] = [];
  items: Item[] = [];
  item2 = new Item2('New Item2', 600);


  constructor(private cartService: CartService, private postsService: PostsService) {


    this.postsService.getFeed().subscribe((result) => {
      this.items = result;
    });

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



