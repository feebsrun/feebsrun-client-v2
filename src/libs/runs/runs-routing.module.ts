import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunsPageComponent } from './containers/runs-page.component';

const routes: Routes = [
  { path: '', component: RunsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunsRoutingModule { }
