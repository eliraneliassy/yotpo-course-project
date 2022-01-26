import { Query } from '@datorama/akita';

import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {FeedState, FeedStore} from "./feed.store";
import {Item} from "../item.interface";

@Injectable({
  providedIn: 'root'
})
export class FeedQuery extends Query<FeedState> {

  selectItems$: Observable<Item[]> = this.select('items');

  constructor(protected override store: FeedStore) {
  super(store);
}


}
