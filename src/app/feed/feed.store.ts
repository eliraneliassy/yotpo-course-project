import { Store, StoreConfig } from '@datorama/akita';
import {Injectable} from "@angular/core";
import {Item} from "../item.interface";

export interface FeedState {
  items: Item[]
}

export function createInitialState(): FeedState {
  return {
    items: [],
  };
}


@StoreConfig({ name: 'feed' })
@Injectable({
  providedIn: 'root'
})
export class FeedStore extends Store<FeedState> {
  constructor() {
    super(createInitialState());
  }
}
