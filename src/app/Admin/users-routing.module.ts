import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddEditComponent } from './admin-add-edit/admin-add-edit.component';
const routesUser: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: '', component: AdminListComponent },
          { path: 'add', component: AdminAddEditComponent },
          { path: 'edit/:id', component: AdminAddEditComponent }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesUser)
  ],
  exports:[RouterModule]
})
export class UsersRoutingModule { }
