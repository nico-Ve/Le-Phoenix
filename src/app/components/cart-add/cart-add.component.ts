import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {
 
  @Input() book;
  isContained: boolean;
  quantity: number;
 
  constructor(
    private cs: CartService) {}

  ngOnInit() {        
    this.isContained = Object.keys(this.cs.getCart()).includes(this.book.isbn);      
    this.quantity = 1;  
  }

  send(){    
    this.cs.addItem(this.book, this.quantity);    
    this.ngOnInit();
  }

  add(){
    this.quantity += 1;
  }

  substract(){
    if(this.quantity > 1){
      this.quantity -= 1;
    }
  }
}
