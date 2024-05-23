import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterByCategoryPipe } from '../../pipe/filter-by-category.pipe';
import { TotalPricePipe } from '../../pipe/total-price.pipe';
import {
  FormArray,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { GotoCart } from '../../services/goto-cart.service';
import { take } from 'rxjs';
import { CartmodalComponent } from '../cartmodal/cartmodal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import '@khmyznikov/pwa-install';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HttpClientModule,
    RouterOutlet,
    CommonModule,
    FilterByCategoryPipe,
    TotalPricePipe,
    ReactiveFormsModule,
    IonicModule,
    MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  cartItems: any[] = [];
  title!: string;
  categories: any[] = [];
  selectedCategorie!: any;
  order: any[] = [];
  orderForm: FormArray<
    FormGroup<{
      quantity: FormControl;
      recipe: FormGroup<{
        uuid: FormControl;
        price: FormControl;
        title: FormControl;
      }>;
    }>
  > = new FormArray([],
    Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3),
    ])) as any;



  constructor(
    apiService: ApiService,
    private gotoCart: GotoCart,
    private dialog: MatDialog) {

    apiService.getData().then((database) => {
      console.log('>>>>', database);
      this.title = database.title;
      this.categories = database.data;
      this.selectedCategorie = database.data[0];

    });

    this.orderForm.markAsTouched();
  }

  handleClick(event: MouseEvent) {
    const dialogRef = this.dialog.open(CartmodalComponent, {
      width: '80%',
      height: '500px',
      data: { cartItems: this.cartItems }
    });

    dialogRef.afterClosed().subscribe(() => {
      // Reset the cart items in the home component
      this.resetCart();
      console.log('Modal closed');
    });
  }

  resetCart(): void {
    // Reset the cart items in the home component
    this.cartItems = [];
    console.log('Cart items reset:', this.cartItems);
  }

  addToCart(recipe: any) {
    const index = this.orderForm.value.findIndex((r, t) => {
      return r?.recipe?.uuid === recipe.uuid;
    });

    if (index >= 0) {
      const control = this.orderForm.at(index);
      if (!control) {
        throw new Error('Form control does not exist');
      }
      control.patchValue({ quantity: ++control.value.quantity });
    } else {
      const newControl = new FormGroup({
        quantity: new FormControl(
          1,
          Validators.compose([Validators.required, Validators.min(1)])
        ),
        recipe: new FormGroup({
          title: new FormControl(
            recipe.title,
            Validators.required
          ),
          price: new FormControl(
            recipe.price,
            Validators.compose([Validators.required, Validators.min(1)])
          ),
          uuid: new FormControl(recipe.uuid),
        }),
      });

      let currentCartItems: any[] = [];
      this.gotoCart.cartItems$.pipe(take(1)).subscribe((cartItems: any[]) => {
        currentCartItems = cartItems || [];
      });

      // Check if the item already exists in the cart
      const existingIndex = currentCartItems.findIndex(item => item.recipe.uuid === recipe.uuid);
      if (existingIndex !== -1) {
        // If the item exists, update its quantity
        currentCartItems[existingIndex].quantity++;

        // Recalculate the total price based on all items in the cart
        const totalPrice = currentCartItems.reduce((acc, item) => acc + item.recipe.price * item.quantity, 0);

        // Update the total price in the service
        this.gotoCart.updateTotalPrice(totalPrice);
      } else {
        // If the item doesn't exist, add it to the cart
        currentCartItems.push({ recipe: recipe, quantity: 1, totalPrice: recipe.price });
      }

      // Calculate the total price
      const totalPrice = currentCartItems.reduce((acc, item) => acc + item.totalPrice, 0);

      // Update the cart items and total price in the service
      this.gotoCart.updateCartItems(currentCartItems);
      this.gotoCart.updateTotalPrice(totalPrice);
      this.cartItems = currentCartItems; // Update local cart items
    }
  }


}

