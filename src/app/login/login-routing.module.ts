import { ClientLoginComponent } from './client-login/client-login.component';
import { CounselorLoginComponent } from './counselor-login/counselor-login.component';
import { LoginListComponent } from './login-list/login-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginListComponent,
    children: [
      {
        path: 'CounselorLogin',
        component: CounselorLoginComponent
      },
      {
        path: 'ClientLogin',
        component: ClientLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
