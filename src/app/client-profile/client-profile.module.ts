import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProfileRoutingModule } from './client-profile-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ProCounselorListComponent } from './pro-counselor-list/pro-counselor-list.component';
import { ProCounselorDetailComponent } from './pro-counselor-detail/pro-counselor-detail.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';





@NgModule({
  declarations: 
  [ProfileListComponent, DashboardComponent, SessionsComponent, ProCounselorListComponent, ProCounselorDetailComponent],
  imports: [
    CommonModule,
    ClientProfileRoutingModule,
    FormsModule,
    MatRadioModule
  ]
})
export class ClientProfileModule { }
