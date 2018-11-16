import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setItem(name, item){
    sessionStorage.setItem(name, JSON.stringify(item));
  }

  getItem(name){
    if(sessionStorage.getItem(name)){
      return JSON.parse(sessionStorage.getItem(name));
    }
    return null;
  }

  removeItem(name){
    sessionStorage.removeItem(name);
  }

  cleanSession(names: any[]){
    for(let arg of names){
      this.removeItem(arg);
    }
  }
}
