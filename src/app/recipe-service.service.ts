import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './recipe.interface';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private selectedRecipesSubject = new BehaviorSubject<Recipe[]>([]);
  selectedRecipes$ = this.selectedRecipesSubject.asObservable();

  addRecipe(recipe: Recipe): void {
    const selectedRecipes = this.selectedRecipesSubject.getValue();
    this.selectedRecipesSubject.next([...selectedRecipes, recipe]);
  }

  // removeRecipe(recipe: Recipe): void {
  //   const selectedRecipes = this.selectedRecipesSubject.getValue();
  //   const updatedRecipes = selectedRecipes.filter(r => r.id !== recipe.id);
  //   this.selectedRecipesSubject.next(updatedRecipes);
  // }
}
