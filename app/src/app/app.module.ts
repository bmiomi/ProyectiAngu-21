import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {App_Routing} from './routing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App_Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
