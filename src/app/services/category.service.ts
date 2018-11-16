import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly path: string = "categories";

  constructor(private rest: RestService) { }

  getValid() {
    return this.rest.getData("customCategories/valid");
  }
}
