import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductComponent} from "./product.component";
import {ItemModule} from "../item/item.module";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ItemModule
  ]
})
export class ProductModule { }
