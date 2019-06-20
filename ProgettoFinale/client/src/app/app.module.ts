import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ElencoArticoliComponent } from './components/elenco-articoli/elenco-articoli.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { UtenteService } from './services/utente.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ElencoArticoliComponent,
    RegistrationComponent,
 
  ],
  imports: [   FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [UtenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
