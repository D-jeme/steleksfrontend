import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ModeratorPrijavaService {
  url:string="https://steleksdevelopment.herokuapp.com";

  constructor(private _http:Http){}

  prijava(user:string, password:string) {
    var body = {username: user, password: password};
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log(body);
    this._http.post(this.url + '/api/moderators/login',
    body,
      {
        headers: headers,
        withCredentials: true
      }
    ).map(res=> {
      if(res.status >= 200 && res.status<=299)
        return res.json();
      console.log("Ne valja:", res);
      throw new Error( "NE VALJA" );
    }).subscribe(
      data => {
          console.log(data);
          //localStorage.setItem('currentUser', JSON.stringify({ token: data.token, user: data.user }));
        },
    error =>{
      console.log(error);
    }

    );
}
}
