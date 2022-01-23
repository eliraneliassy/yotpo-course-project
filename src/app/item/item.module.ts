import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemComponent} from "./item.component";
import {RouterModule} from "@angular/router";
import {DiscountPipe} from "../discount.pipe";



@NgModule({
  declarations: [ItemComponent, DiscountPipe],
  exports: [ItemComponent],
  imports: [
    RouterModule,
    CommonModule
  ]

})
export class ItemModule { }
