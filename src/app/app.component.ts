import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from './state/day-16/userstate.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {
    this.addUserData();
  }
  title = 'task-management';
  addUserData() {
    const data = localStorage.getItem('userStateData');
    const previousData = data ? JSON.parse(data) : [];
    const newData = Array.isArray(previousData) ? previousData.flat() : [];
    if (newData.length > 0) {
      this.store.dispatch(addUser({ user: newData, isFrom: false }));
    }

  }



}
