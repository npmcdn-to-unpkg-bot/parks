import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Park } from './park';
import { ParkService } from './park.service';

function compareValues(v1, v2) {
  return (v1 > v2) 
    ? 1 
    : (v1 < v2 ? -1 : 0);
};

@Component({
  selector: 'states',
  templateUrl: 'app/states.component.html',
  styleUrls: ['app/parks.component.css']
})
export class StatesComponent implements OnInit {

  parks: Park[] = [];

  constructor(
    private _router: Router,
    private _parkService: ParkService) {
  }

  ngOnInit() {
    this._parkService.getParks()
      .then(parks => this.parks = parks.sort(function (a, b) {
          var result = compareValues(a.state, b.state);

          return result === 0 
            ? compareValues(a.name, b.name) 
            : result;
      }))
  }

  gotoDetail(park: Park) {
    let link = ['ParkDetail', { slug: park.slug }];
    this._router.navigate(link);
  }
}
