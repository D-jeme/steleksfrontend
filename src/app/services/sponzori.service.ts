import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Sponzor } from '../models/sponzori';
import { Router} from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class SponzoriService {
  url:string="https://steleks-dev.herokuapp.com";

  constructor(private _http:Http){
  }

  dajSponzore() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get( this.url + '/api/sponsors/main', {
      headers: headers,
      withCredentials:true
    } )
      .map( data => {
        console.log(data.json());
        return data.json();
      } );
  }


  prijava(name:String,imgUrl:String) {
    var body = JSON.stringify({name, imgUrl, "redirectUrl":"https://ibb.co/fpirzz" ,"isActive":true, "isTemporary":false});
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
