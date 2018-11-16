import { Component, OnInit } from '@angular/core';
import { AddressService } from './../../services/address.service';
import { AuthService } from './../../services/auth.service';
import { RestService } from './../../services/rest.service';

@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.css']
})
export class AccountAddressComponent implements OnInit {

  addressList;

  constructor(private as: AddressService) { }

  ngOnInit() {
    this.as.getAll().subscribe(data => {
      this.addressList = RestService.unwrap(data, 'addresses');    
    });
  }



}
