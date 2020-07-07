import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThemeService, Themes } from '@libs/theme';
import { AuthService } from '@libs/auth';

@Component({
  selector: 'feebs-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  darkTheme = new FormControl(false);

  constructor(private themeService: ThemeService, public authService: AuthService) {
    const initialValue = this.themeService.currentTheme$.value;
    this.darkTheme.setValue(initialValue);

    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.setTheme(Themes.DarkTheme);
      } else {
        this.themeService.setTheme(Themes.LightTheme);
      }
    });

    this.authService.userProfile$.subscribe(userData => console.log(userData));
  }
}
