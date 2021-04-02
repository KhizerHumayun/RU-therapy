
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProCounselorListComponent } from './pro-counselor-list/pro-counselor-list.component';
import { ProCounselorDetailComponent } from './pro-counselor-detail/pro-counselor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileListComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'sessions',
        component: SessionsComponent
      },
      {
        path: 'procounselors',
        component: ProCounselorListComponent,
        children: [
          {
            path: ':id',
            component: ProCounselorDetailComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientProfileRoutingModule { }
