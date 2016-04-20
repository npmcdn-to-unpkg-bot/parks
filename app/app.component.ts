import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {provide}           from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { ParkService } from './park.service';
import { DashboardComponent } from './dashboard.component';
import { ParkDetailComponent } from './detail.component';

@Component({
  selector: 'my-app',
  template: `
  <h1><a [routerLink]="['Dashboard']">{{title}}</a></h1>
  <h5>{{subtitle}}</h5>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}),
    ParkService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'ParkDetail',
    component: ParkDetailComponent
  }
])
export class AppComponent {
  title = 'National Parks Weather';
  subtitle = 'Up-to-date weather for US national parks';
}
