import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {provide}           from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {enableProdMode} from 'angular2/core';
enableProdMode()

bootstrap(AppComponent, [HTTP_PROVIDERS]);
