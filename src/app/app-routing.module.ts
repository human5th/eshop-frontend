import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AllproductsComponent } from './pages/products/allproducts/allproducts.component';
import { CountProductsComponent } from './pages/products/countProductsComponent/countproducts.component';
import { CreateComponent } from './pages/products/create/create.component';
import { DetailsComponent } from './pages/products/details/details.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  //authgard
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'products', component: AllproductsComponent,
    children: [
      {
        path: '', component: CountProductsComponent
      },
      { path: 'add', component: CreateComponent },      
      { path: ':id', component: DetailsComponent }      
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//https://dashboard.heroku.com/auth/heroku/callback?code=7c9ab4e8-2022-449e-b87c-20065b9e3c5d&state=27463ab12bf273606d1e893c134543717750785ca76b13b0d4457f374aac450b