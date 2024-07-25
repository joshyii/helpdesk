import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAddEditComponent } from './admin-add-edit/admin-add-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';



@NgModule({
  declarations: [
    LayoutComponent,
    AdminAddEditComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
