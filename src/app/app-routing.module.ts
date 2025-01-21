import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Day9TaskComponent } from './day-9-task/day-9-task.component';
import { Day10Component } from './day-10/day-10.component';
import { Day11TaskComponent } from './day-11/day-11-task/day-11-task.component';
import { Day12Component } from './day-12/day-12/day-12.component';
import { UserInfoComponent } from './day-15/user-info/user-info.component';
import { UserDataPageComponent } from './day-16/componant/user-data-page/user-data-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'taskManagementModule', loadChildren: () =>
      import('./task-management-module/task-management-module.module').then(m => m.TaskManagementModuleModule)
  },
  {
    path: 'profileModule', loadChildren: () =>
      import('./day-13/user-profile-module/user-profile-module.module').then(m => m.UserProfileModuleModule)
  },
  { path: 'day-9', component: Day9TaskComponent },
  { path: 'day-10', component: Day10Component },
  { path: 'day-11', component: Day11TaskComponent },
  { path: 'day-12', component: Day12Component },
  { path: 'day-15', component: UserInfoComponent },
  { path: 'day-16', component: UserDataPageComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
