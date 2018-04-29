import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginPage } from './Login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './RouteSetting/app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './RouteSetting/app.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,LoginPage,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
