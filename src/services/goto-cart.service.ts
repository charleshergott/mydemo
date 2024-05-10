import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GotoCart {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  constructor() { }

  updateCartItems(cartItems: any[]) {
    this.cartItemsSubject.next(cartItems);
  }
}


