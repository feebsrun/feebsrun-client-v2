import { NgModule } from "@angular/core";
import { ThemeRootDirective } from './directives';

@NgModule({
  declarations: [
    ThemeRootDirective,
  ],
  exports: [
    ThemeRootDirective,
  ]
})
export class ThemeModule { }