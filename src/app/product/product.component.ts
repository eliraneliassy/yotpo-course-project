import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Item} from "../item.interface";
import {delay} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item | null = null;
  loading: boolean = false;

  constructor(private postsService: PostsService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activedRoute.params.subscribe((params: Params) => {
    //   this.postsService.getPostById((params['id']))
    //     .pipe(
    //       // delay(3000)
    //     )
    //     .subscribe((item: Item) => {
    //     this.item = item;
    //   })
    // })
    this.activedRoute.data.subscribe((res: any) => {this.item = res[0];
    this.loading = false;
    })

  }

}
