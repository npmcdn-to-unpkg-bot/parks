import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Park } from './park';
import { ParkService } from './park.service';

@Component({
  selector: 'my-park-detail',
  templateUrl: 'app/detail.component.html',
  styleUrls: ['app/detail.component.css']
})
export class ParkDetailComponent implements OnInit {
  @Input() park: Park;

  constructor(
    private _parkService: ParkService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._parkService.getPark(id)
      .then(park => this.park = park);
  }
}
