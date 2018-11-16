import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly path: string = "books";

  constructor(private rest: RestService) { }

  getFromCategory(id){    
    let url: string = "categories/" + id + "/books";
    return this.rest.getData(url);
  }

  getBySearch(term: string){
    let url: string = "customBooks?search=" + term;
    return this.rest.getData(url);
  }

  getAll(){
    this.rest.getData(this.path);
  }
}
