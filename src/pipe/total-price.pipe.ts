import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice',
  standalone: true
})
export class TotalPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
