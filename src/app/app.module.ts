
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { HammerModule } from "@angular/platform-browser"
import { HttpClientModule } from '@angular/common/http';

//APIs
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


//Modules and Components
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { ContactComponent } from './contact/contact.component';
import { ClientProfileModule } from './client-profile/client-profile.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CounselorProfileModule } from './counselor-profile/counselor-profile.module';
import { ProcounselorService } from './client-profile/procounselor.service';



//Here in the array, add routes to other components
const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  {path: 'contact', component: ContactComponent},  

  {path: 'clientprofile', loadChildren: () => import('./client-profile/client-profile.module').then(m => m.ClientProfileModule) },

  {path: 'counselorprofile', loadChildren: () => import('./counselor-profile/counselor-profile.module').then(m => m.CounselorProfileModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    RouterModule.forRoot(routes),
    ClientProfileModule,
    CounselorProfileModule,
    MatInputModule,
    HammerModule,
    MatButtonModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule 
   
  ],
  exports: [
    RouterModule
  ],
  providers: [ProcounselorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
