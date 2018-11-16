import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly url: String = environment.backend;

  constructor(private httpClient: HttpClient) { }

  getData(path: string) {
    return this.httpClient.get(this.url + path);
  }

  setData(path: string, data) {
    data = JSON.stringify(data);
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post(this.url + path, data, options);
  }

  updateData(path: string, data, updateAll = true) {
    data = JSON.stringify(data);
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    if (updateAll) {
      return this.httpClient.put(this.url + path, data, options);
    } 
      return this.httpClient.patch(this.url + path, data, options);  
  }

  public static unwrap(data, property) {
    if (data['_embedded']) {
      data = data['_embedded'];
      if (data[property]) {
        data = data[property];
      }
    }
    return data;
  }
}
