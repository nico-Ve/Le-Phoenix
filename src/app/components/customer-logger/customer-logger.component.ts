import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from './../../services/customer.service';


@Component({
  selector: 'app-customer-logger',
  templateUrl: './customer-logger.component.html',
  styleUrls: ['./customer-logger.component.css']
})
export class CustomerLoggerComponent implements OnInit {
  
  customerLogForm = this.fb.group({
    mail: ['', Validators.required],
    password: ['', Validators.required]
  });
  message;

  constructor(private fb: FormBuilder, private cs: CustomerService) {}

  ngOnInit() {    
    this.cs.message.subscribe(state => {
      this.message = state;
    });
  }

  onSubmit(){
    let formValue = this.customerLogForm.value;
    this.cs.verify(formValue.mail, formValue.password, '/account');
  }  

}
