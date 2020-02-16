import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('inputName', {static:false}) nameInputRef: ElementRef;
  @ViewChild('inputAmount', {static:false}) amountInputRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(){
    const currInputName = this.nameInputRef.nativeElement.value;
    const currInputAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(currInputName, currInputAmount);

    //this.ingredientAdded.emit(newIngredient);
    //this.shoppingService.currIngredient.emit(newIngredient);

    this.shoppingService.addIngredient(newIngredient);
  }

}
