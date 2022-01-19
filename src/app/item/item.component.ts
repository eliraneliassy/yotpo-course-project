import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Item} from "../item.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent
  // implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy
{

  @Input() item: Item | null = null;
  @Input() isInCart: boolean = false;

  @Output() addToCart:EventEmitter<Item | null> = new EventEmitter<Item | null>();
  @Output() removeFromCart:EventEmitter<Item | null> = new EventEmitter<Item | null>();

  today = Date.now();

  constructor(private router: Router) {
    console.log('CTOR');
  }

  addToCartClicked(){
    this.addToCart.emit(this.item);
  }

  removeFromCartClicked() {
    this.removeFromCart.emit(this.item);
  }

  goToProduct(){
    this.router.navigateByUrl(`/product/${this.item?.id}`);
    // this.router.navigate(['/product', this.item?.id])
  }

  // ngAfterContentChecked(): void {
  //   console.log('After content checked')
  // }
  //
  // ngAfterContentInit(): void {
  //   console.log('After content init')
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log('After view checked');
  // }
  //
  // ngAfterViewInit(): void {
  //   console.log('After View Init')
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('On Change', changes);
  // }
  //
  // ngOnDestroy(): void {
  //   console.log('Destory')
  // }
  //
  // ngOnInit(): void {
  //   console.log('On Init')
  // }

}
