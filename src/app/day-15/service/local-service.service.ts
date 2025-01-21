import { Injectable } from '@angular/core';
import { User } from '../user-info/userModel';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor() { }
  saveUsers(users: User[]): void {
    localStorage.setItem('userData', JSON.stringify(users));
  }

  getUsers(): User[] {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : [];
  }
}
