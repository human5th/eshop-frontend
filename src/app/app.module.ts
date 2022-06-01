import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateComponent } from './pages/products/create/create.component';
import { DetailsComponent } from './pages/products/details/details.component';
import { AllproductsComponent } from './pages/products/allproducts/allproducts.component';
import { CountProductsComponent } from './pages/products/countProductsComponent/countproducts.component';


const Pages = [
  LoginComponent,
  RegisterComponent,
  ResetPasswordComponent,
  PageNotFoundComponent,
  DashboardComponent
];

@NgModule({
  declarations: [
    AppComponent,
    Pages,
    HeaderComponent,
    SidebarComponent,
    CreateComponent,
    DetailsComponent,
    AllproductsComponent,
    CountProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
