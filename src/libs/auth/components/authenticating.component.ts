import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { LoginComplete } from '../actions/auth.actions';

@Component({
  selector: 'feebs-auth-callback',
  template: `
    <p>
      Loading...
    </p>
  `,
  styles: []
})
export class AuthenticatingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // this.store.dispatch(new LoginComplete());
  }
}
