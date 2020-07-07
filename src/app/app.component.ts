import { Component } from '@angular/core';

import { ThemeService } from '@libs/theme';

@Component({
  selector: 'feebs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideHeader = false;
  hideLeft = false;
  hideRight = false;
  hideFooter = false;

  constructor(public themeService: ThemeService) { }
}
