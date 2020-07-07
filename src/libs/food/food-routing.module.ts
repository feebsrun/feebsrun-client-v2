import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodPageComponent } from './containers/food-page.component';

const routes: Routes = [
  { path: '', component: FoodPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule { }
