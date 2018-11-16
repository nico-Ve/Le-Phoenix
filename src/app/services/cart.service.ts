import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public static readonly sessionName: string = "cart";
  public cartSize: BehaviorSubject<number>;

  constructor(private ss: SessionService) { 
    this.cartSize = new BehaviorSubject(Object.keys(this.getCart()).length);
  }

  getCart(bool = true) {
    if (this.ss.getItem(CartService.sessionName)) {
      return this.ss.getItem(CartService.sessionName);
    } else if (bool) {
      return new Object();
    }
    return null;
  }

  setCart(data) {
    this.ss.setItem(CartService.sessionName, data);
  }

  removeCart() {
    this.ss.removeItem(CartService.sessionName);
    this.refreshSize();
  }

  addItem(book, quantity) {

    let list = this.getCart();

    if (list[book.isbn]) {
      list[book.isbn].quantity = list[book.isbn].quantity + quantity;
    } else {
      list[book.isbn] = { 'book': book, 'quantity': quantity };
    }

    this.setCart(list);
    this.refreshSize();
  }

  subItem(book, quantity) {
    let list = this.getCart();
    if (list[book.isbn]) {
      let newQuantity = list[book.isbn].quantity - quantity;
      if (newQuantity <= 0) {
        this.removeItem(book);
      } else {
        list[book.isbn].quantity = newQuantity;
      }
    }
    this.setCart(list);
  }

  removeItem(book) {
    let list = this.getCart();
    if (list[book.isbn]) {
      delete list[book.isbn];
    }
    if (Object.keys(list).length === 0) {
      this.removeCart();
    } else {
      this.setCart(list);
    }
    this.refreshSize();
  }

  refreshSize(){    
    this.cartSize.next(Object.keys(this.getCart()).length);
  }
}
