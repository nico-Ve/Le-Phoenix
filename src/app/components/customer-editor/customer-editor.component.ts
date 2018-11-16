import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from './../../services/customer.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.css']
})
export class CustomerEditorComponent implements OnInit {

  user;
  customerForm = this.fb.group({
    mail: ['', Validators.required],
    nickname: ['', Validators.required],
    password: ['', Validators.required],
    confirmation: ['', Validators.required],
    firstname: [''],
    lastname: [''],       
    tel: [''],
  });
  submit;
  legend;


  constructor(
    private fb: FormBuilder,
    private cs: CustomerService, 
    private as: AuthService) { }

  ngOnInit() {
    this.user = this.as.getUser();
    this.legend = "Créez votre compte :";
    this.submit = "Valider";
   
    if (this.user){
      this.customerForm.setValue({
        ['mail']: this.user.mail,
        ['nickname']: this.user.nickname,
        ['password']: '***************',
        ['confirmation']: '***************',
        ['firstname']: this.user.firstname,
        ['lastname']: this.user.lastname,
        ['tel']: this.user.tel
      });
     this.legend = "Mes infos :";
     this.submit= "Enregistrer";
    }
  }

  onSubmit(){    
    if(this.user){
      let data = this.customerForm.value;
      delete data.password;
      delete data.confirmation;      
      this.cs.update(this.user.mail, data);
    } else {
      this.cs.add(this.customerForm.value);
    }    
  }
}
