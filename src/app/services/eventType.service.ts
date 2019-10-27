import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Router} from '@angular/router';

@Injectable()
export class EventTypeService {
  url:string="https://steleks-dev.herokuapp.com";

  constructor(private _http:Http){}

  dajEventTypes() {
    console.log("tu saam");
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.url + '/api/events/news')
    return this._http.get( this.url + '/api/eventTypes/', {
      headers: headers
    } )
      .map( data => {
        console.log("PODACI");
        console.log(data.json());
        return data.json();
      } );


  }



}
