import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementModuleRoutingModule } from './task-management-module-routing.module';
import { TaskListComponantComponent } from './task-list-componant/task-list-componant.component';
import { TaskAddUpdateDailogComponent } from './task-add-update-dailog/task-add-update-dailog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    TaskListComponantComponent,
    TaskAddUpdateDailogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskManagementModuleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule


  ]
})
export class TaskManagementModuleModule { }
