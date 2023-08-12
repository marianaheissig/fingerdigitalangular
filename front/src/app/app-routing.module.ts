import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ClientScreenComponent} from './client-screen/client-screen.component';
import {AdminScreenComponent} from './admin-screen/admin-screen.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  {path: 'signup', component: SignupComponent }, 
  {path: 'client', component: ClientScreenComponent},
  {path: 'admin', component: AdminScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
