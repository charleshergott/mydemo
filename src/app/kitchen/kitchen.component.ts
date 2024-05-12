import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service.service';
import { Recipe } from '../recipe.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class KitchenComponent implements OnInit {
  selectedRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipes$.subscribe(recipes => {
      this.selectedRecipes = recipes;
    });
  }
}