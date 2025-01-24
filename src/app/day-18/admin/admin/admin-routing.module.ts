import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponantComponent } from '../admin-componant/admin-componant.component';
import { AdminService1Component } from '../admin-service1/admin-service1.component';
import { AdminService2Component } from '../admin-service2/admin-service2.component';

const routes: Routes = [
  {
    path: '', component: AdminComponantComponent,
    children: [
      {
        path: 'adminService1',
        component: AdminService1Component
      },
      {
        path: 'adminService2',
        component: AdminService2Component
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
