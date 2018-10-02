import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NewspageComponent} from '../components/newspage/newspage.component'
import { Router} from '@angular/router';

@Injectable()
export class EventService {
  url:string="http://localhost:8080";

  constructor(private _http:Http){}

  dajEvents() {
    console.log("tu saam");
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.url + '/api/events/news')
    return this._http.get( this.url + '/api/events/news', {
      headers: headers
    } )
      .map( data => {
        console.log("PODACI");
        console.log(data.json());
        return data.json();
      } );
  }



}
