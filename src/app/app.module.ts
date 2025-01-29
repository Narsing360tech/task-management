import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserProfileComponent } from './day-13/user-profile/user-profile.component';
import { ConfirmationDialogComponent } from './day-13/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DisplayDataComponent } from './day-13/display-data/display-data.component';
import { MatIconModule } from '@angular/material/icon';
import { UserInfoComponent } from './day-15/user-info/user-info.component';
import { userReducer } from './state/users/user.reducer';
import { UserEffects } from './state/users/users.effect';
import { UserDataPageComponent } from './day-16/componant/user-data-page/user-data-page.component';
import { CreateorupdateComponent } from './day-16/componant/createorupdate/createorupdate.component';
import { userstateReducer } from './state/day-16/userstate.reducer';
import { UserStateEffects } from './state/day-16/userstate.effect';
import { DeleteConfirmComponent } from './day-16/componant/delete-confirm/delete-confirm.component';
import { UserLandingComponent } from './day-18/user/user-landing/user-landing.component';
import { AdminComponantComponent } from './day-18/admin/admin-componant/admin-componant.component';
import { UnAuthorizedComponent } from './landing-page/un-authorized/un-authorized.component';
import { AdminService1Component } from './day-18/admin/admin-service1/admin-service1.component';
import { AdminService2Component } from './day-18/admin/admin-service2/admin-service2.component';
import { Services1Component } from './day-18/user/services1/services1.component';
import { Services2Component } from './day-18/user/services2/services2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { postsReducer } from './state/post-state/post.reducer';
import { PostsEffects } from './state/post-state/post.effect';
import { HeaderComponantComponent } from './header-componant/header-componant.component';
import { FooterComponantComponent } from './footer-componant/footer-componant.component';
import { ShowWidgetAllComponent } from './day-20/show-widget-all/show-widget-all.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { Day21Component } from './day-21/day-21/day-21.component';
import { ProductListComponent } from './day-21/day-21/product-list/product-list.component';
import { CartComponent } from './day-21/day-21/cart/cart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskNumber22Component } from './day-22/task-number-22/task-number-22.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Day9TaskComponent,
    Day10Component,
    Day11TaskComponent,
    Day12Component,
    UserProfileComponent,
    ConfirmationDialogComponent,
    DisplayDataComponent,
    UserInfoComponent,
    UserDataPageComponent,
    CreateorupdateComponent,
    DeleteConfirmComponent,
    UserLandingComponent,
    AdminComponantComponent,
    UnAuthorizedComponent,
    AdminService1Component,
    AdminService2Component,
    Services1Component,
    Services2Component,
    HeaderComponantComponent,
    FooterComponantComponent,
    ShowWidgetAllComponent,
    Day21Component,
    ProductListComponent,
    CartComponent,
    TaskNumber22Component,

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
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    ScrollingModule,
    MatDialogModule,
    MatBadgeModule,
    FormsModule,
    MatTabsModule
    ,
    StoreModule.forRoot({
      tasks: taskReducer,

    }),
    EffectsModule.forRoot([
      AllTaskEffect,
      PostsEffects
    ]),
    StoreModule.forRoot({ users: userReducer, userstate: userstateReducer, posts: postsReducer }),
    EffectsModule.forRoot([UserEffects, UserStateEffects, PostsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
