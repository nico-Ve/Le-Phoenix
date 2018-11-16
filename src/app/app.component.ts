import { Component, OnInit, isDevMode } from '@angular/core';
import { RestService } from './services/rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Le-Phoenix';

  constructor(private rs: RestService, private hc: HttpClient) { }
}
