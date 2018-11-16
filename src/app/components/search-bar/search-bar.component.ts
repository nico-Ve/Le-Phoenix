import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm = this.fb.group({
    search: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['/books', {term: this.searchForm.value.search}]);   
  }

}
