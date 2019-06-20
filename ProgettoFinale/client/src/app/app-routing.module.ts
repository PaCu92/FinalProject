import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { ElencoArticoliComponent } from './components/elenco-articoli/elenco-articoli.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'registration', component:RegistrationComponent},
  {path: 'home', component:HomeComponent},
  {path: 'elenco-articoli/:id', component: ElencoArticoliComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
