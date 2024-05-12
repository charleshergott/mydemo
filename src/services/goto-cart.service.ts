import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotoCart {
  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  private totalPriceSource = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSource.asObservable();

  constructor() { }

  updateCartItems(cartItems: any[]) {
    this.cartItemsSource.next(cartItems);
  }

  updateTotalPrice(totalPrice: number) {
    this.totalPriceSource.next(totalPrice);
  }
}



