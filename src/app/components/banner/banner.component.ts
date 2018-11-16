import { Component, OnInit } from '@angular/core';
import { RestService } from './../../services/rest.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  lib;

  constructor(private rs: RestService) { }

  ngOnInit() {  
    this.rs.getData("libraries").subscribe(data => {
      this.lib = RestService.unwrap(data, "libraries");
    });
  }

}
