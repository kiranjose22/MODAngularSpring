import { Injectable } from '@angular/core';
import { users } from './users';
import { EventEmitter } from 'events';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginprocessService {

  // public loginEvent = new EventEmitter()
  // isLoggedin:new BehaviorSubject<boolean>(false);
  constructor() { }
  flag = false
  currentUser
  loggedin = false

  authenticate(user) {
    this.flag = false;
    for (let i of users) {
      if (i.email === user.email && i.password === user.password && i.role===user.role) {
        console.log("Login success");
        this.flag = true;
        this.currentUser = i;
        console.log(this.currentUser)
        this.loggedin = true
        return true;
      }
    }
    if (!this.flag) {
      console.log("Login failed");
      this.loggedin = false;
      return false;
    }
  }
  getCurrentUser() {
    return this.currentUser;
  }
  logout() {
    this.flag = false
    this.currentUser =''
    this.loggedin = false
  }
}
