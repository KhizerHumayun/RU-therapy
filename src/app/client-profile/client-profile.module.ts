import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProfileRoutingModule } from './client-profile-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [ProfileListComponent, DashboardComponent],
  imports: [
    CommonModule,
    ClientProfileRoutingModule
  ]
})
export class ClientProfileModule { }
