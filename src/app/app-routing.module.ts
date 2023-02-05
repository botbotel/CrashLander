import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MiembrosPageComponent } from './pages/miembros-page/miembros-page.component';
import { MiembrosDetailComponent } from './pages/miembros-detail/miembros-detail.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'miembrosPage',
    component: MiembrosPageComponent
  },
  {
    path: 'miembrosDetail',
    component: MiembrosDetailComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
