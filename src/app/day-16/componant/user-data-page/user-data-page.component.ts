import { Component, createComponent, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { CreateorupdateComponent } from '../createorupdate/createorupdate.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFilteredUsers, selectStateUsers } from 'src/app/state/day-16/userstate.selector';
import { deleteUser, setSearchTerm, setStatusFilter } from 'src/app/state/day-16/userstate.action';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { FormControl } from '@angular/forms';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.scss']
})
export class UserDataPageComponent implements OnInit {
  users$: Observable<any>;
  usersData: any[] = [];
  filteredUsers$: Observable<any>;

  @ViewChildren('userCards', { read: ElementRef })
  userCardElements!: QueryList<ElementRef>;
  statuses: string[] = ['All', 'Interviewing', 'Onboarded'];
  filterStatus = new FormControl('All');
  nameSearch = new FormControl('');
  filterStatusValue: any;
  nameSearchValue: any;

  constructor(private dialog: MatDialog, private store: Store, private renderer: Renderer2) {
    this.users$ = this.store.select(selectStateUsers);
    this.filteredUsers$ = this.store.select(selectFilteredUsers);
    this.filteredUsers$.subscribe((res) => {
      console.log("filter data", res);
      this.usersData = res;
    })
  }
  ngOnInit(): void {
    this.nameSearch.valueChanges.subscribe((name: any) => {
      this.nameSearchValue = name;
      this.store.dispatch(setSearchTerm({ searchTerm: name }));
    });

    this.filterStatus.valueChanges.subscribe((status: any) => {
      this.filterStatusValue = status === 'All' ? '' : status;
      console.log(this.filterStatusValue);
      this.store.dispatch(setStatusFilter({ status: this.filterStatusValue }));
    });

  }



  addUser() {
    const dialogRef = this.dialog.open(CreateorupdateComponent, {
      width: '600px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result);
        setTimeout(() => {
          const newCard = this.userCardElements.last;
          if (newCard) {
            this.renderer.addClass(newCard.nativeElement, 'fade-in');
          }
        }, 100);
      }
    });
  }


  updateUser(user: any) {
    const dialogRef = this.dialog.open(CreateorupdateComponent, {
      width: '600px',
      autoFocus: false,
      data: user,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const updatedCard = this.userCardElements.find(
          (el) => el.nativeElement.id === `user-card-${user.id}`
        );
        if (updatedCard) {
          this.renderer.addClass(updatedCard.nativeElement, 'fade-in');
          setTimeout(() => {
            this.renderer.removeClass(updatedCard.nativeElement, 'fade-in');
          }, 1000);
        }
      }
    });
  }



  deleteUser(user: any) {
    const targetCard = this.userCardElements.find(
      (el) => el.nativeElement.id === `user-card-${user.id}`
    );

    if (targetCard) {
      this.renderer.addClass(targetCard.nativeElement, 'fade-out');
      setTimeout(() => {
        this.store.dispatch(deleteUser({ id: user.id }));
      }, 500);
    } else {
      this.store.dispatch(deleteUser({ id: user.id }));
    }
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

  onCardMouseEnter(card: any) {
    this.renderer.addClass(card.nativeElement, 'card-hover');
  }

  onCardMouseLeave(card: any) {
    console.log("card-data", card);
    this.renderer.removeClass(card.nativeElement, 'card-hover');
  }




}
