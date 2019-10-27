import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RegistrovaniClan } from '../models/registracijastudent';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistracijaService {
  url:string="https://steleks-dev.herokuapp.com";

  constructor(private _http:Http){}

  prijava(clan: RegistrovaniClan) {
    console.log("ima li te ");
    var body = JSON.stringify({clan: RegistrovaniClan});
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
          localStorage.setItem('currentUser', JSON.stringify({ token: data.token, clan: data.clan }));
        },
    error =>{
      console.log(error);
    }

    );
}
}
