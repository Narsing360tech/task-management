import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { concatMap, map } from 'rxjs';

@Component({
  selector: 'app-day-10',
  templateUrl: './day-10.component.html',
  styleUrls: ['./day-10.component.scss']
})
export class Day10Component implements OnInit {

  combinedData: any[] = [];
  constructor(private usersService: UsersService) {

  }
  ngOnInit(): void {
    this.loadUserData();
  }



  loadUserData() {
    const userId = 1;

    this.usersService
      .fetchUserProfile(userId)
      .pipe(
        concatMap((profile) =>
          this.usersService
            .fetchUserPermissions(profile.role)
            .pipe(
              map((permissions) => ({
                profile,
                permissions: permissions[0].permissions,
              }))
            )
        )
      )
      .subscribe({
        next: (data) => {
          this.combinedData.push(data);
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
  }
}
