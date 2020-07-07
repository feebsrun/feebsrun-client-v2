import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatingComponent } from '@libs/auth';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authenticating', component: AuthenticatingComponent },
  { path: 'runs', loadChildren: () => import('@libs/runs').then(m => m.RunsModule) },
  { path: 'food', loadChildren: () => import('@libs/food').then(m => m.FoodModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
