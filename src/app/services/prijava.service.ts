import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrijavaService {
  url:string="https://steleksproba.herokuapp.com";

  constructor(private _http:Http){}

  prijava(user:string, password:string) {
    var body = JSON.stringify({username: user, password: password});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);

    this._http.post(this.url + '/user/login',
    body,
      {
        headers: headers
      }
    ).map(res=> res.json()).subscribe(
      data => {
          console.log(body);
          localStorage.setItem('currentUser', JSON.stringify({ token: data.token, user: data.user }));
        },
    error =>{
      console.log(error);
    }

    );
}
}
