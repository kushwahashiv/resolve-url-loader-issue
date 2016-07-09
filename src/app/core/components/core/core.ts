import {Component, ViewEncapsulation, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {Dashboard} from '../../../dashboard/components/dashboard/dashboard';


@Component({
  selector: 'app',
  template: require('./core.html'),
  providers: [
  ],
  encapsulation: ViewEncapsulation.None,
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig(<any>[
  {path: '/dashboard', name: 'Dashboard', component: Dashboard, useAsDefault: true},
  {path: '/**', redirectTo: ['Dashboard']}
])

export class Core {

  constructor() {
  }
}
