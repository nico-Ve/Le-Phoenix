import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType  } from 'ngx-paypal';
import { AddressService } from './../../services/address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order;
  address;
  public payPalConfig?: PayPalConfig;

  constructor(private os: OrderService, private as: AddressService) { }

  ngOnInit() {
    this.order = this.os.getOrder();
    if(this.as.getAddress()){
      this.address = this.as.getAddress();
    } else {
      this.as.getDefault().subscribe(data =>{
        if(data){
          this.address = data;
          this.as.setAddress(data);
        } 
      });
    }
    this.initConfig();
  }

  onClick(){
    this.os.executeOrder();
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log(err);
      },
      transactions: [{
        amount: {
          currency: 'EUR',
          total: this.order.ttcPrice,
        }
      }]
    });
  }

}
