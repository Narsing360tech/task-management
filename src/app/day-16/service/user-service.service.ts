import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }
  saveUsers(users: any): void {
    localStorage.setItem('userNewData', JSON.stringify(users));
  }
}
