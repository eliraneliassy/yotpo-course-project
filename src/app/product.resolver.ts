import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Params
} from '@angular/router';
import {delay, Observable, of} from 'rxjs';
import {Item} from "./item.interface";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<boolean> {
  constructor(private postsService: PostsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // return this.activedRoute.params.subscribe((params: Params) => {
    //   this.postsService.getPostById((params['id']))
    //     .pipe(
    //       delay(3000)
    //     )
    //     .subscribe((item: Item) => {
    //       this.item = item;
    //     })
    // })

    // const id = route.params['id'];
    // return this.postsService.getPostById(id)
    //   .pipe(delay(3000))

    return of(true);

  }
}
