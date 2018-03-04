import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AlbumipageComponent} from '../components/albumipage/albumipage.component'
import { Router} from '@angular/router';

@Injectable()
export class AlbumService {
  url:string="http://localhost:8080";
  idGalerije:String;

  constructor(private _http:Http){this.idGalerije="";}

  dajAlbume( ) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.options( this.url + '/api/albums', {
      headers: headers
    } )
      .map( data => {

        return data.json();
      } );

  }
  postaviIdGalerije(id:String){
    this.idGalerije=id;
    
  }



}
