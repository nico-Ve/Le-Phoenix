import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { AddressService } from './address.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public static readonly sessionName: string = 'order';

  constructor(
    private cs: CartService,
    private as: AuthService,
    private ads: AddressService,
    private router: Router,
    private ss: SessionService,
    private rs: RestService) { }

  addOrder() {
    if (this.as.checkLogin()) {
      let cart = this.cs.getCart();
      let cartKeys = Object.keys(cart);
      let order = { "orderLines": [] };

      cartKeys.forEach(element => {
        let book = { "isbn": element };
        order.orderLines.push({ "book": book, "quantity": cart[element].quantity });
      });
      this.rs.setData("customOrders", order).subscribe(response => {
        this.setOrder(response);
        this.router.navigate([ '/checkout' ]);
      });
    };
  }

  executeOrder(){
    let order = this.getOrder();
    order.address = this.ads.getAddress();
    order.customer = this.as.getUser();
    this.rs.setData("customOrders/execute", order).subscribe(response => {
      this.ss.cleanSession([OrderService.sessionName, AddressService.sessionName, CartService.sessionName]);
      this.cs.refreshSize();
      this.router.navigate([ '/validation' ]);
    });
  }

  getAll(){
    let url = "customers/" + this.as.getUser().mail + "/bookOrders";
    return this.rs.getData(url);
  }

  setOrder(order){
    this.ss.setItem(OrderService.sessionName, order);
  }

  removeOrder(){
    this.ss.removeItem(OrderService.sessionName);
  }

  getOrder(){
    return this.ss.getItem(OrderService.sessionName);
  }
}
