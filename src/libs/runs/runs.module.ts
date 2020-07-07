import { NgModule } from '@angular/core';

import { RunsPageComponent } from './containers/runs-page.component';
import { RunsRoutingModule } from './runs-routing.module';

@NgModule({
  declarations: [RunsPageComponent],
  exports: [RunsPageComponent],
  imports: [RunsRoutingModule],
})
export class RunsModule { }
