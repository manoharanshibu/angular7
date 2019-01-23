import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  callDataService () {
    alert("data service called");
  }

  getUsers(){
    // return this.http.get('https://en.gravatar.com/site/implement/images/');
    return this.http.get('https://reqres.in/api/users');
  }
}
