import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrearMiembroComponent } from './components/crear-miembro/crear-miembro.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MiembrosPageComponent } from './pages/miembros-page/miembros-page.component';
import { MiembrosDetailComponent } from './pages/miembros-detail/miembros-detail.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from './modules/material/material.module';


// APLICAR IDIOMA ESPAÑOL EN LA APLICACIÓN
import localeES from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from './services/contact-service.service';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localeES)

@NgModule({
  declarations: [
    AppComponent,
    CrearMiembroComponent,
    LoginFormComponent,
    NavComponent,
    HomePageComponent,
    MiembrosPageComponent,
    MiembrosDetailComponent,
    LoginPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    },
    ContactServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
