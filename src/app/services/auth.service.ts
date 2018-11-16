import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly sessionName: string = "user";
  public readonly isLogged: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private router: Router, 
    private ss: SessionService) {
    this.isLogged.next(this.getUser());
  }    

  getUser(){
    return this.ss.getItem(AuthService.sessionName);
  }

  checkLogin(): Boolean{
    if(!this.getUser()){
      this.router.navigate([ '/signin' ]);
      return false;
    }
    return true;
  }

  login(user){
    this.ss.setItem(AuthService.sessionName, user);
    this.isLogged.next(user);
  }

  logout(){
    this.ss.cleanSession([AuthService.sessionName, 'order', 'address']);
    this.isLogged.next(null);
  }
}
