import { NgModule } from '@angular/core';

import { FoodPageComponent } from './containers/food-page.component';
import { FoodRoutingModule } from './food-routing.module';

@NgModule({
  declarations: [FoodPageComponent],
  exports: [FoodPageComponent],
  imports: [FoodRoutingModule],
})
export class FoodModule { }
