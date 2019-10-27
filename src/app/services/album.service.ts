import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AlbumipageComponent} from '../components/albumipage/albumipage.component'
import { Router} from '@angular/router';

@Injectable()
export class AlbumService {
  url:string="https://steleks-dev.herokuapp.com";
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

  updateAlbum(id:string,imgUrls:Array<string>,title:string){
    console.log("inace");
    var body = JSON.stringify({title,imgUrls});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log("tijelo",body);
var url1='/api/albums/'+id;
    this._http.put(this.url + url1,
    body,
      {
        headers: headers,
        withCredentials: true
      }
    ).map(res=> res.json()).subscribe(
      data => {
console.log("body",body);
        },
    error =>{

    }

    );


  }

  postaviIdGalerije(id:String){
    this.idGalerije=id;
  }

    dodajAlbum(title:string,imgUrls:Array<string>,eventType:string) {
      var body = JSON.stringify({title,imgUrls,eventType});
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
  console.log(body);
      this._http.post(this.url + '/api/albums',
      body,
        {
          headers: headers,
          withCredentials: true
        }
      ).map(res=> res.json()).subscribe(
        data => {
console.log("body",body);
          },
      error =>{

      }

      );
  }


}
