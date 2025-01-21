import { Component, createComponent, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { CreateorupdateComponent } from '../createorupdate/createorupdate.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectStateUsers } from 'src/app/state/day-16/userstate.selector';
import { deleteUser } from 'src/app/state/day-16/userstate.action';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.scss']
})
export class UserDataPageComponent {
  users$: Observable<any>;
  usersData: any[] = [];
  constructor(private dialog: MatDialog, private store: Store, private renderer: Renderer2) {
    this.users$ = this.store.select(selectStateUsers);
    this.users$.subscribe((res) => {
      this.usersData = res;
    })
  }

  addUser() {
    const dialogRef = this.dialog.open(CreateorupdateComponent, {
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result: any) => { })
  }




  updateUser(user: any) {
    const dialogRef = this.dialog.open(CreateorupdateComponent, {
      width: '600px',
      autoFocus: false,
      data: user
    });

    dialogRef.afterClosed().subscribe((result: any) => { })
  }

  deleteUser(user: any) {
    this.openConfirmDialog(user)
  }

  openConfirmDialog(user: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.store.dispatch(deleteUser({ id: user.id }));
        console.log(result);
      }
    })
  }




}
