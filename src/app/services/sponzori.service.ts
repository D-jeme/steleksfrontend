import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Sponzor } from '../models/sponzori';

import 'rxjs/add/operator/map';

@Injectable()
export class SponzoriService {
  url:string="https://steleksproba.herokuapp.com";

  constructor(private _http:Http){}

  prijava(sponzor:Sponzor) {
    console.log("ima li te ");
    var body = JSON.stringify({sponzor:Sponzor});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
    console.log(body);
    this._http.post(this.url + '/user/login',
    body,
      {
        headers: headers
      }
    ).map(res=> res.json()).subscribe(
      data => {
          console.log("cao");
          localStorage.setItem('currentUser', JSON.stringify({ sponzor: data.sponzor }));
        },
    error =>{
      console.log(error);
    }

    );
}
}
