import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pudding recipe',
      'This is a pudding test recipe',
      'https://cdn.pixabay.com/photo/2018/02/05/19/12/strawberry-3132973_960_720.jpg', [
      new Ingredient('milk', 1),
      new Ingredient('eggs', 3),
      new Ingredient('sugar', 2)
    ]),
    new Recipe('Pizza recipe',
      'Vegetable pizza recipe for sure',
      'https://cdn.pixabay.com/photo/2019/05/18/10/24/pizza-4211599_960_720.jpg', [
      new Ingredient('Pizza base', 2),
      new Ingredient('Cheese', 1),
      new Ingredient('Tomato', 2)
    ])
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    const recipe = this.recipes[id];

    /* const recipe = this.recipes.find(
      (s) => {
        return s.id === id;
      }
    ); */

    return recipe;
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
