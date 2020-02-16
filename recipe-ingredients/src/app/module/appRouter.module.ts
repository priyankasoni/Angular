import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent/* ,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent
      }
    ] */
  },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'not-found', component : NotFoundComponent, data: {  message: 'Page is not found!!'} },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}