import { Component, OnInit, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { CartItem } from '../cartItems.interface';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../recipe-service.service';
import { RouterOutlet } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';



@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.component.html',
  styleUrls: ['./cartmodal.component.scss'],
  imports: [CommonModule, HomeComponent, IonicModule, RouterOutlet],
  standalone: true,
})
export class CartmodalComponent implements OnInit {
  selectedRecipe!: Recipe;

  @Input() cartData: CartItem[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CartmodalComponent>,
    private recipeService: RecipeService,
    private _firestore: Firestore
  ) {
    this.cartData = data.cartData;
  }

  buy(): void {
    this.recipeService.addRecipe(this.selectedRecipe);
  }

  ngOnInit() {
    this.cartData = this.data.cartItems.map((item: CartItem) => {
      return {
        ...item,
        totalPrice: item.quantity * item.recipe.price
      };
    });
  }

  incrementQuantity(item: CartItem): void {
    item.quantity++;
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  getTotalAmount(): number {
    return this.cartData.reduce((total, item) => {
      return total + (item.quantity * item.recipe.price);
    }, 0);
  }

  buyItems(): void {
    console.log('Buy button clicked!');
    const docRef = collection(this._firestore, 'orderfood');
    addDoc(docRef, { order: this.cartData });
  }

  startOver(): void {
    this.dialogRef.close();
  }
}
