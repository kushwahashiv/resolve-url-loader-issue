import {FORM_PROVIDERS, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS, RequestOptions, BaseRequestOptions} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {APP_PROVIDERS} from '../../app/app';
// Angular 2 Router

class AppRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    this.headers.append('Content-Type', 'application/json');
  }
}
/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  ...APP_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  {provide: RequestOptions, useClass: AppRequestOptions}
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
