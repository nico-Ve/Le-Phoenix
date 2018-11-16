import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../../services/book.service';
import { RestService } from './../../services/rest.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList;

  constructor(
    private bs: BookService,
    private route: ActivatedRoute) { }

  ngOnInit() {         
    this.route.params.subscribe(p => {
      if (p['id']){
        this.sub(this.bs.getFromCategory(p['id']));
      }  else if (p['term']){
        this.sub(this.bs.getBySearch(p['term']));        
      } else {
        this.sub(this.bs.getAll());           
      }      
    });        
  }

  sub(observable){
    if(observable){
      observable.subscribe(data => {
        this.bookList = RestService.unwrap(data, 'books');
      });
    }    
  }

}
