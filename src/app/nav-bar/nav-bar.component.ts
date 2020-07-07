import { Component, OnInit } from '@angular/core';

interface AppTile {
  caption: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'feebs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  tiles: AppTile[] = [];

  ngOnInit() {
    this.tiles.push({
      caption: 'Runs',
      icon: 'run',
      routerLink: 'runs'
    });

    this.tiles.push({
      caption: 'Food',
      icon: 'food',
      routerLink: 'food',
    });
  }
}
