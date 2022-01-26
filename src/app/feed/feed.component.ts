import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../item.interface";
import {CartService} from "../cart.service";
import {PostsService} from "../posts.service";
import {FeedQuery} from "./feed.query";
import {FeedState, FeedStore} from "./feed.store";
import {interval, map, Observable, Subscription, tap} from 'rxjs';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  items$: Observable<Item[]> = new Observable<Item[]>();

  firstItem$: Observable<Item> = new Observable<Item>();

  firstItem: Item | null = null;

  constructor(private cartService: CartService,
              private postsService: PostsService,
              private feedQuery: FeedQuery,
              private feedStore: FeedStore,
              private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.postsService.getFeed().subscribe((result) => {
      // this.items = result;
      this.feedStore.update((store: FeedState) => ({...store, items: result}))
    });

    this.items$ = this.feedQuery.selectItems$;

    this.firstItem$ = this.items$.pipe(map((items: Item[]) => items[0]));

    this.firstItem$.subscribe(item => {
      this.firstItem = item;
      this.cdr.markForCheck();
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

  addPost(){
    const item: Item = {
      userId: 1,
      title: 'New POST!',
      body: 'The ecommerce web site is revolve'
    }

    this.postsService.addPost(item).subscribe((item: Item) => {
      this.feedStore.update((store) => ({...store, items: [item, ...store.items ]}))
    });

  }

  updatePost(){

    const newItem: Item = {
      userId: 1,
      title: 'Update post id1 to this!',
      body: 'The ecommerce web site is revolve'
    }
    this.postsService.updatePost(1, newItem).subscribe(itemFromServer => {
      // this.items = this.items.map(item => {
      //   if(item.id === 1) {
      //     return itemFromServer;
      //   }
      //   return item;
      // })

      // const index = this.items.findIndex((item:Item) => item.id === 1);
      // this.items[index] = itemFromServer;

      this.feedStore.update((store: FeedState) => {
        let items = [...store.items];

        items = items.map(item => {
          if(item.id === 1) {
            return itemFromServer
          }

          return  item;
        });

        return {...store, items};
      });
    });


  }

  filterPosts(userId: number) {
    this.postsService.getAllUserPosts(userId).subscribe((items: Item[]) => {
      this.feedStore.update(store => ({...store, items}))
    });
  }



}
