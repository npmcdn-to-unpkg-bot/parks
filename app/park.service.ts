import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Park}           from './park';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ParkService {
  constructor (private http: Http) {}
  private _parksUrl = 'http://parks-dev.us-west-2.elasticbeanstalk.com/parks/';  // URL to web api

  getParks (): Promise<Park[]> {
  return this.http.get(this._parksUrl)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }
  getPark(id: number) {
      return this.http.get(this._parksUrl)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError)
                  .then(parks => parks.filter(park => park.id === id)[0]);
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
