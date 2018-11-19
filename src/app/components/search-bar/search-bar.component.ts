import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm = this.fb.group({
    search: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private bs: BookService) { }

  ngOnInit() {
  }

  onSubmit(){    
    this.bs.getByTerm(this.searchForm.value.search);   
  }

}
