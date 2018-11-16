import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-account-bar',
  templateUrl: './account-bar.component.html',
  styleUrls: ['./account-bar.component.css']
})
export class AccountBarComponent implements OnInit {

  user;
  cartSize: Number;

  constructor(private as: AuthService, private cs: CartService) {}

  ngOnInit() {   
    this.as.isLogged.subscribe(state =>{
      this.user = state;
    });    
    this.cs.cartSize.subscribe(value =>{
      this.cartSize = value;
    });
  }

  onClick(){
    this.as.logout();
  }
}
