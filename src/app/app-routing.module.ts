import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { UsersComponent } from './components/users/users.component';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'info',
    component: InfoComponent, 
  },
  {
    path: 'pages',
    component: PagesComponent, 
  },
  { path: '**', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
