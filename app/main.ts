import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {provide}           from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {enableProdMode} from 'angular2/core';
import {GoogleAPI} from './gmap.service';
enableProdMode()

bootstrap(AppComponent, [GoogleAPI, HTTP_PROVIDERS]);
