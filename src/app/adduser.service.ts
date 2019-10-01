import { Injectable } from '@angular/core';
import {users} from './users';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  constructor() { }

  //users = [];

  addNew(user) {
    users.push(user);
    console.log(users);
  }

  getItems() {
    users;
  }
}
