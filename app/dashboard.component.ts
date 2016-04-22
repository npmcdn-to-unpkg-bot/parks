import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Park } from './park';
import { ParkService } from './park.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  parks: Park[] = [];

  constructor(
    private _router: Router,
    private _parkService: ParkService) {
  }

  ngOnInit() {
    this._parkService.getParks()
      .then(parks => this.parks = parks);
  }

  gotoDetail(park: Park) {
    let link = ['ParkDetail', { slug: park.slug }];
    this._router.navigate(link);
  }
}
