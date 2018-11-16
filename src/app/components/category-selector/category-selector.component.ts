import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { RestService } from './../../services/rest.service';


@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {

  categoriesList; 

  constructor(private cs: CategoryService) { }

  ngOnInit() {
    this.cs.getValid().subscribe(data => {
      this.categoriesList = RestService.unwrap(data, 'categories');
    });   
   
  }


}
