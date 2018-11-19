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
  total;

  constructor(private cs: CartService, private os: OrderService) { }

  ngOnInit() {
    this.total = 0;
    this.cartList = this.cs.getCart(false);
    if (this.cartList) {
      this.cartKeys = Object.keys(this.cartList);
    }
    if (this.cartList) {
      for (let k of this.cartKeys) {
        this.total += this.cartList[k].book.price * this.cartList[k].quantity;
      }
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

  deleteClick() {
    this.cs.removeCart();
    this.ngOnInit();
  }
}
