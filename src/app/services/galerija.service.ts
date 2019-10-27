import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {GallerypageComponent} from '../components/gallerypage/gallerypage.component'
import { Router} from '@angular/router';

@Injectable()
export class GalerijaService {
  url:string="https://steleks-dev.herokuapp.com";
  idGalerije:String;

  constructor(private _http:Http){this.idGalerije="";}

  postaviIdGalerije(id:String){
    this.idGalerije='/api/albums/'+id;
    console.log("imal meeeee1", this.idGalerije);
  }

  dajSlike( ) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.get( this.url + this.idGalerije , {
      headers: headers
    } )
      .map( data => {
  console.log("imal meeeee2" );
        return data.json();
      } );

  }




}
