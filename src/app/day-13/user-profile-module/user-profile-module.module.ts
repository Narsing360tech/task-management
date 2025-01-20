import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileModuleRoutingModule } from './user-profile-module-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserProfileModuleRoutingModule,
    MatIconModule,
    MatDialogModule,

  ]
})
export class UserProfileModuleModule { }
