import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {EventpreviewComponent} from '../components/eventpreview/eventpreview.component'
import { Router} from '@angular/router';

@Injectable()
export class EventPreviewService {
  url:string="http://localhost:8080";
  idEventa:String;

  constructor(private _http:Http){this.idEventa="";}

  postaviIdEventa(id:String){
    this.idEventa='/api/events/'+id;
    console.log("Id eventa",this.idEventa);
  }

  dajEvent( ) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.get( this.url + this.idEventa , {
      headers: headers
    } )
      .map( data => {

        return data.json();
      } );

  }




}
