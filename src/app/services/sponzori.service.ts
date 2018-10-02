import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Sponzor } from '../models/sponzori';

import 'rxjs/add/operator/map';

@Injectable()
export class SponzoriService {
  url:string="http://localhost:8080";

  constructor(private _http:Http){
  }

  dajSponzore() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.url + '/api/sponsors')
    return this._http.get( this.url + '/api/sponsors', {
      headers: headers,
      withCredentials:true
    } )
      .map( data => {
        console.log(data.json());
        return data.json();
      } );
  }


  prijava(name:String,imgUrl:String) {
    var body = JSON.stringify({name, imgUrl, "redirectUrl":"https://ibb.co/fpirzz" ,"isActive":true, "isTemporary":true});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
    console.log(body);
    this._http.post(this.url + '/api/sponsors',
    body,
      {
        headers: headers,
        withCredentials: true
      }
    ).map(res=> res.json()).subscribe(
      data => {
          console.log(data);
        },
    error =>{
      console.log(error);
    }

    );
}
}
