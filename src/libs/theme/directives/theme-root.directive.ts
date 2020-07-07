import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

import { Themes } from '../services/theme.service';

@Directive({
  selector: '[feebsThemeRoot]',
})
export class ThemeRootDirective {

  @Input('feebsThemeRoot')
  set rootThemeValue(val: Themes) {
    this.setTheme(val);
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setTheme(theme: Themes) {
    this.removeAllThemes();
    this.renderer.addClass(this.el.nativeElement, theme);
  }

  private removeAllThemes() {
    Object.keys(Themes).forEach(key => this.renderer.removeClass(this.el.nativeElement, Themes[key]));
  }
}