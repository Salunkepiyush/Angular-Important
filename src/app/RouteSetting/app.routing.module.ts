import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../Login/login.component';



const routes: Routes = [
    { path: '', component: LoginPage }
    
    //redirectTo: '/dashboard'
  ];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [RouterModule],

})

export class AppRouting{}