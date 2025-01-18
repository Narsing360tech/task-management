import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task-management/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AllTaskEffect } from './state/task-management/task.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Day9TaskComponent } from './day-9-task/day-9-task.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Day10Component } from './day-10/day-10.component';
import { Day11TaskComponent } from './day-11/day-11-task/day-11-task.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Day12Component } from './day-12/day-12/day-12.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Day9TaskComponent,
    Day10Component,
    Day11TaskComponent,
    Day12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    ScrollingModule,
    StoreModule.forRoot({
      tasks: taskReducer
    }),
    EffectsModule.forRoot([
      AllTaskEffect
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
