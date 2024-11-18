import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AemployeeProfileComponent } from './aemployee-profile/aemployee-profile.component';
import { EmployeeTableComponent } from './aemployee-profile/employee-table/employee-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-profile', pathMatch: 'full' },
  { path: 'employee-profile', component: AemployeeProfileComponent },
 { path: 'employee-add', component: EmployeeTableComponent },
  { path: 'employee-edit/:id', component: EmployeeTableComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
