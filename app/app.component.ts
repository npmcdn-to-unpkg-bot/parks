import { provide, Component } from 'angular2/core';
import { LocationStrategy, HashLocationStrategy, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ParkService } from './park.service';
import { ParksComponent } from './parks.component';
import { StatesComponent } from './states.component';
import { ParkDetailComponent } from './detail.component';

@Component({
  selector: 'parks-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    ParkService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Parks',
    component: ParksComponent,
    useAsDefault: true
  },
  {
    path: '/states',
    name: 'States',
    component: StatesComponent
  },
  {
    path: '/:slug',
    name: 'ParkDetail',
    component: ParkDetailComponent
  },
])
export class AppComponent {
  title = 'National Parks Weather';
  subtitle = 'Up-to-date weather for US national parks';
}
