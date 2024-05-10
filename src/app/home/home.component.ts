import { Component } from '@angular/core';
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
    IonicModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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

  constructor(apiService: ApiService) {
    // where does 'database' come from?
    apiService.getData().then((database) => {
      console.log('>>>>', database);
      this.title = database.title;
      this.categories = database.data;
      this.selectedCategorie = database.data[0];

    });

    // console.log(this.orderForm);
    // console.log(this.orderForm.value);
    this.orderForm.markAsTouched();
  }

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    const cartItems = this.orderForm.value.map((control: any) => {
      const recipeFormGroup = control.recipe;
      return {
        title: recipeFormGroup.title,
        quantity: control.quantity
      };
    });

    const alertMessage = cartItems.map((item: any) => `${item.quantity} x ${item.title}`).join('\n');

    this.displayAlert('Items in Cart:\n' + alertMessage);
  }

  // handleButtonClicked($event: any) {
  // }

  // buttonClicked($event: any) { }

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
            recipe.title, // Add the title property here
            Validators.required
          ),
          price: new FormControl(
            recipe.price,
            Validators.compose([Validators.required, Validators.min(1)])
          ),
          uuid: new FormControl(recipe.uuid),
        }),
      });
      this.orderForm.push(newControl);
    }
  }


  private displayAlert(message: string): void {
    alert(message);
  }
}

