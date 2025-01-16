import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Day9TaskComponent } from './day-9-task/day-9-task.component';
import { Day10Component } from './day-10/day-10.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'taskManagementModule', loadChildren: () => import('./task-management-module/task-management-module.module').then(m => m.TaskManagementModuleModule) },
  { path: 'day-9', component: Day9TaskComponent },
  { path: 'day-10', component: Day10Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
