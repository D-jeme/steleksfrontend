import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Elektrijada } from '../models/elektrijada';

import 'rxjs/add/operator/map';

@Injectable()
export class ElektrijadaService {
  url:string="https://steleksproba.herokuapp.com";

  constructor(private _http:Http){}

  prijava(elektrijada:Elektrijada) {
    console.log("ima li te ");
    var body = JSON.stringify({elektrijada:Elektrijada});
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
          console.log(data);
          localStorage.setItem('currentUser', JSON.stringify({ elektrijada:data.elektrijada }));
        },
    error =>{
      console.log(error);
    }

    );
}
}
