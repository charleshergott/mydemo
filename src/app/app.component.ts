import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import database from '../assets/data.json';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterByCategoryPipe } from '../pipe/filter-by-category.pipe';
import { TotalPricePipe } from '../pipe/total-price.pipe';
import {
  FormArray,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HeaderComponent,
    FilterByCategoryPipe,
    TotalPricePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = database.title;
  categories = database.data;
  selectedCategorie = database.data[0];
  order: any[] = [];
  orderForm: FormArray<
    FormGroup<{
      quantity: FormControl;
      recipe: FormGroup<{
        uuid: FormControl;
        price: FormControl;
      }>;
    }>
  > = new FormArray([]) as any;

  constructor() {

  }

  handleClick($event: any) {
    if (!this.orderForm.valid) {
      return;
    }
    console.log('Form is valid! Proceeding with the click action...');
  };

  handleButtonClicked($event: any) {

  }

  addToCart(recipe: any) {
    const index = this.orderForm.value.findIndex((r) => {
      return r?.recipe?.uuid === recipe.uuid;
    });
    if (index >= 0) {
      // change quantity FormControl value form correct element
      const control = this.orderForm.at(index);
      if (!control) {
        throw new Error('form control not exist');
      }
      console.log('>>', control);
      control.patchValue({ quantity: ++control.value.quantity });
    } else {
      // create new FormGroup to validate data
      const newEl = new FormGroup({
        quantity: new FormControl(
          1,
          Validators.compose([Validators.required, Validators.min(1)])
        ),
        recipe: new FormGroup({
          price: new FormControl(recipe.price),
          uuid: new FormControl(recipe.uuid),
        }),
      });
      // add FromGroup to FormArray
      this.orderForm.push(newEl);
    }
  }
}
