import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { ContactComponent } from './contact/contact.component';
import { ClientProfileModule } from './client-profile/client-profile.module';


//Here in the array, add routes to other components
const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: 'login', 
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {path: 'contact', component: ContactComponent},  

  {path: 'clientprofile', loadChildren: () => import('./client-profile/client-profile.module').then(m => m.ClientProfileModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RouterModule.forRoot(routes),
    ClientProfileModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
