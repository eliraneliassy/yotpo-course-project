import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  pure: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    // if (value > 400) {
    //   return value * 0.9;
    // } else{
    //   return value;
    // }

    return (value > 400) ? (value * 0.9) : value;
  }

}
