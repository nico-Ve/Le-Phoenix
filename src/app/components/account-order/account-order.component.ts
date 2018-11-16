import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { RestService } from './../../services/rest.service';

@Component({
  selector: 'app-account-order',
  templateUrl: './account-order.component.html',
  styleUrls: ['./account-order.component.css']
})
export class AccountOrderComponent implements OnInit {

  public orderList;

  constructor(private os: OrderService) { }

  ngOnInit() {
    this.os.getAll().subscribe(data=>{
      this.orderList = RestService.unwrap(data, 'bookOrders');      
    });
  }

}
