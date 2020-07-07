import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'feebs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  @Input()
  hideHeader = false;
  @Input()
  hideLeft = false;
  @Input()
  hideRight = false;
  @Input()
  hideFooter = false;

  constructor() { }

  ngOnInit() {

  }
}
