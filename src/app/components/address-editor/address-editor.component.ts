import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddressService } from './../../services/address.service';

@Component({
  selector: 'app-address-editor',
  templateUrl: './address-editor.component.html',
  styleUrls: ['./address-editor.component.css']
})
export class AddressEditorComponent implements OnInit {

  addressForm = this.fb.group({
    name: [''],
    addressline: ['6 rue du test', Validators.required],
    complement: [''],
    zip: ['75001', Validators.required],
    city: ['Paris', Validators.required],
    country: ['France', Validators.required],
    estate: [''],
    oname: [''],
    ofirstname: [''],
    def: [false],
  });

  constructor(private fb: FormBuilder, private as: AddressService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.as.add(this.addressForm.value);
  }

}
