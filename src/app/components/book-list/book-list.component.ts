import { Component, OnInit } from '@angular/core';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList;
  message: string;

  constructor(
    private bs: BookService) { }

  ngOnInit() {     
    this.bs.bookList.subscribe(response => {
      this.bookList = response;
      this.validate();      
    });
  }

  private validate(){    
    if(this.bookList.term && this.bookList.books.length == 0){
        this.message = "aucun résultat pour '" + this.bookList.term +"'";
    }
    if(this.bookList.category && this.bookList.books.length == 0){
      console.log('aucun livre pour cette catégorie');
    }
  }
}
