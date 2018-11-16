import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {
 
  @Input() book;
  cartForm = this.fb.group({
    book: [],
    quantity: [],    
  });
  isContained: boolean;
 
  constructor(
    private fb: FormBuilder, 
    private cs: CartService) { 
      
    }

  ngOnInit() {    
    this.cartForm.setValue({['book']: this.book, ['quantity']: 1});
    this.isContained = Object.keys(this.cs.getCart()).includes(this.book.isbn);        
  }

  onSubmit(){    
    let addBook = this.cartForm.value.book;
    let quantity = this.cartForm.value.quantity;
    this.cs.addItem(addBook, quantity);    
    this.ngOnInit();
  }

}
