import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { RestService } from './rest.service';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  public static readonly sessionName: string = "address";

  constructor(
    private aus: AuthService,
    private router: Router,
    private ss: SessionService,
    private rs: RestService) { }

  getAll() {
    let userId = this.aus.getUser().mail;
    let url = "customers/" + userId + "/addresses";
    return this.rs.getData(url);
  }

  getAddress() {
    return this.ss.getItem(AddressService.sessionName);
  }

  setAddress(address) {
    this.ss.setItem(AddressService.sessionName, address);
  }

  removeAddress() {
    this.ss.removeItem(AddressService.sessionName);
  }

  getDefault() {
    let userId = this.aus.getUser().mail;
    let url = "customCustomers/" + userId + "/addresses/def";
    return this.rs.getData(url);
  }

  add(address) {
    let userId = this.aus.getUser().mail;
    address['customer'] = { 'mail': userId };
    this.rs.setData("customAddresses", address).subscribe(response => {
      this.router.navigate(['/account/addresses']);
    });
  }
}
