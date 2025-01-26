import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DisplaySingleDataComponent } from './display-single-data/display-single-data.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'details' },
  { path: 'details', component: DisplayDataComponent },
  { path: 'details/:id', component: DisplaySingleDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostmoduleRoutingModule { }
