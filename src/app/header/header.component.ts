import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GotoCart } from '../../services/goto-cart.service';
import { CartItem } from '../cartItems.interface';
import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonMenuButton, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule,
    IonHeader,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle
  ]
})
export class HeaderComponent {

  @Input() public title?: string;
  @Output() public childEvent: EventEmitter<string> = new EventEmitter();

  cartItems: { quantity: number, recipe: CartItem }[] = [];

  constructor(private gotoCart: GotoCart) {
    this.gotoCart.cartItems$.subscribe(cartItems => {
      try {
        this.cartItems = cartItems;
      } catch (error) {
        console.error('Error parsing cart items:', error);
      }
    });
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    // console.log(this.cartItems)
    return this.cartItems.reduce((total, item) => {
      if (item && typeof item.recipe.price === 'number' && !isNaN(item.recipe.price) && item.recipe.price >= 0) {
        return total + ((item.quantity * item.recipe.price) / 100);
      } else {
        console.error(`Invalid price for item: ${item?.recipe.title}, Price: ${item?.recipe.price}`);
        return total;
      }
    }, 0);
  }

  emitEvent() {
    console.log('xxx');
    this.childEvent.emit('event from child');
  }

  colorText() {
    if (this.title?.toLocaleLowerCase().includes('pizza')) {
      return 'var(--main-color)';
    } else {
      return 'var(--secondary-color)';
    }
  }

  resetCart(): void {
    this.cartItems = [];
  }
}





