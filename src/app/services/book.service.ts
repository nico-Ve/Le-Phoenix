import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly path: string = "books";   
  public readonly bookList: BehaviorSubject<any> = new BehaviorSubject<any>({})

  constructor(
    private rest: RestService, 
    private router: Router) { }

  getFromCategory(id, page = 0, size = 10){       
    let url: string = "categories/" + id + "/books?page=" + page + "&size=" + size;
    this.getResult(url, {'category' : id})
  }

  getByTerm(term: string, page = 0, size = 10){
    let url: string = "customBooks/search/" + term;
    this.getResult(encodeURI(url), {'term' : term});
  }

  getAll(page = 0, size = 10){
    return this.rest.getData(this.path);
  }

  private getResult(url: string, options = {}){
    this.rest.getData(url).subscribe(data => {        
      let responseObject = {};
      responseObject['books'] = RestService.unwrap(data, this.path); 
      //responseObject['page'] = data['page'];
      for(let o of Object.keys(options)){
        responseObject[o] = options[o];
      }            
      this.bookList.next(responseObject);
      this.router.navigate([ '/books' ]);
    });    
  }
}
