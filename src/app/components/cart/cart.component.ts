import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartKeys;
  cartList;

  constructor(private cs: CartService, private os: OrderService) { }

  ngOnInit() {
    this.cartList = this.cs.getCart(false);
    if (this.cartList) {
      this.cartKeys = Object.keys(this.cartList);               
    }
  }

  onClick() {
    this.os.addOrder();
  }

  addClick(book) {
    this.cs.addItem(book, 1);
    this.ngOnInit();
  }

  subClick(book) {
    this.cs.subItem(book, 1);
    this.ngOnInit();
  }

  removeClick(book) {
    this.cs.removeItem(book);
    this.ngOnInit();
  }

  deleteClick(){    
    this.cs.removeCart();
    this.ngOnInit();
  }
}
