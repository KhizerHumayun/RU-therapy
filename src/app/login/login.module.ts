import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginListComponent } from './login-list/login-list.component';
import { CounselorLoginComponent } from './counselor-login/counselor-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';


@NgModule({
  declarations: [LoginListComponent, CounselorLoginComponent, ClientLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
