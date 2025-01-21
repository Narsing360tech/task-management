import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllUsers } from 'src/app/state/users/user.selecter';
import { loadUsers, updateUserStatus } from 'src/app/state/users/users.action';
import { LocalServiceService } from '../service/local-service.service';
import { User } from './userModel';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {


  users$ = this.store.select(selectAllUsers);

  @ViewChildren('userCard') userCards!: QueryList<ElementRef>;

  constructor(private store: Store, private localStorageService: LocalServiceService,
    private renderer: Renderer2, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.initializeData();
    this.getUsersData();
  }

  getColor(status: string): string {
    switch (status) {
      case 'interviewing': return 'lightblue';
      case 'interview-done': return 'lightgreen';
      case 'onboarded': return 'darkgreen';
      case 'rejected': return 'red';
      case 'failed': return 'gray';
      default: return 'white';
    }
  }

  ngAfterViewChecked(): void {
    this.applyDynamicStyles();
    this.cdr.detectChanges();
  }

  initializeData(): void {
    const existingData = this.localStorageService.getUsers();
    if (existingData.length === 0) {
      const initialData: User[] = [
        { id: '1', name: 'Narsing sonkamble', status: 'interviewing', remarks: 'next round' },
        { id: '2', name: 'Sachin', status: 'interview-done', remarks: 'failed' },
        { id: '3', name: 'Virat Kohli', status: 'onboarded', remarks: 'Pass' },
        { id: '4', name: 'Rohit', status: 'rejected', remarks: 'Placed' },
        { id: '5', name: 'Simran', status: 'failed', remarks: 'Did not pass screening' }
      ];

      this.localStorageService.saveUsers(initialData);
    }
  }

  updateStatus(id: string, status: any): void {
    const userStatus = status;
    this.store.dispatch(updateUserStatus({ id, status: userStatus }));
    this.applyDynamicStyles();
  }

  getUsersData(): void {
    this.store.dispatch(loadUsers());
  }

  applyDynamicStyles(): void {
    this.userCards.forEach((card) => {
      const user = card.nativeElement.dataset.userStatus;
      const color = this.getColor(user);
      this.renderer.setStyle(card.nativeElement, 'background-color', color);
    });
  }
}
