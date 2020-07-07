import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

export enum Themes {
  LightTheme = 'feebs-light',
  DarkTheme = 'feebs-dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme$: BehaviorSubject<Themes> = new BehaviorSubject(Themes.LightTheme);

  constructor() {
    const savedTheme = localStorage.getItem('feebs-theme-value');

    if (savedTheme) {
      const matchingTheme = Object.keys(Themes).find(themeKey => Themes[themeKey] === savedTheme);
      if (matchingTheme) {
        this.setTheme(Themes[matchingTheme]);
      }
    }
  }

  setTheme(theme: Themes) {
    localStorage.setItem('feebs-theme-value', theme);
    this.currentTheme$.next(theme);
  }
}