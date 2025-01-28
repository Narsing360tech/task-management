import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostmoduleRoutingModule } from './postmodule-routing.module';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DisplaySingleDataComponent } from './display-single-data/display-single-data.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DisplayDataComponent,
    DisplaySingleDataComponent,
    AddEditPostComponent,

  ],
  imports: [
    CommonModule,
    PostmoduleRoutingModule,
    MatCardModule, MatButtonModule, MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    ScrollingModule
  ]
})
export class PostmoduleModule { }
