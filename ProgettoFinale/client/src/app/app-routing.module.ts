import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'registration', component:RegistrationComponent},
  {path: 'home', component:HomeComponent},
  /*{path: 'posts', component: PostloopComponent },
  {path: 'posts/:id', component: PostComponent },
  {path: 'comments', component: CommentloopComponent},*/
  {path: '**', redirectTo: '/home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
