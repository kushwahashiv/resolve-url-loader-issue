import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  providers: [

  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class Dashboard {
  constructor() {
  }

  ngOnDestroy() {
  }

}
