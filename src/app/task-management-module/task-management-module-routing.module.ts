import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponantComponent } from './task-list-componant/task-list-componant.component';

const routes: Routes = [{
  path: "", component: TaskListComponantComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementModuleRoutingModule { }
