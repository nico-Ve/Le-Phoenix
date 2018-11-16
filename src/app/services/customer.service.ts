import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly path: string = "customers";
  readonly message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private rest: RestService
    , private router: Router
    , private as: AuthService) { }

  add(data){
    return this.rest.setData(this.path, data).subscribe(response =>{    
      this.as.login(response);  
      this.router.navigate([ '/account' ]);
    }, error => {
      console.log(error);
    });
  }

  update(id, data){
    let url = this.path + "/" + id;
    this.rest.updateData(url, data, false).subscribe(response => {
      this.as.login(response);  
    });
  }

  verify(mail: string, password: string, route: string){
    let url: string = "customCustomers/verify?ma="+ mail +"&pa="+ password;
    return this.rest.getData(url).subscribe(response => {     
      if (response){
        this.as.login(response);
        this.message.next('');
        this.router.navigate([ route ]);
      } else {
        this.message.next("les identifiants saisis sont incorrects");
      }            
    }, error => {
      console.log(error);
    });
  }
}
