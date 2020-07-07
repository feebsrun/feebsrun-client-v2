import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

@NgModule({
  imports: [AngularSvgIconModule, HttpClientModule]
})
export class IconsModule {
  constructor(private iconReg: SvgIconRegistryService) {
    this.iconReg.loadSvg('assets/icons/run.svg', 'run');
    this.iconReg.loadSvg('assets/icons/food.svg', 'food');
  }
}
